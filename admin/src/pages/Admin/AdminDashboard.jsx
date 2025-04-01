import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Package,
  PlusCircle,
  Truck,
  Settings,
  Bell,
  Trash2,
  Lock,
  Unlock,
  ShoppingCart,
  Clock,
  Truck as TruckIcon,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAdminStore } from "@/store/userAdminStore";
import { useToast } from "@/hooks/use-toast";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const formSchema = z.object({
  productname: z.string().min(2, "Product name is required"),
  desription: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category is required"),
  heading1: z.string().min(2, "Heading 1 is required"),
  desription1: z
    .string()
    .min(10, "Description 1 must be at least 10 characters"),
  heading2: z.string().min(2, "Heading 2 is required"),
  desription2: z
    .string()
    .min(10, "Description 2 must be at least 10 characters"),
  qustion1: z.string().min(2, "Question 1 is required"),
  answer1: z.string().min(2, "Answer 1 is required"),
  price: z.string().min(1, "Price is required"),
});

function AdminDashboard() {
  const {
    addProduct,
    fetchUsers,
    users,
    deleteUser,
    toggleBlockUser,
    fetchDeliveryBoys,
    deliveryBoys,
    deleteDeliveryBoy,
    toggleBlockDeliveryBoy,
    fetchOrders,
    orders,
    updateOrderStatus,
    assignDeliveryBoy,
    loading,
    error,
    fetchDashboardStats,
    startRealtimeUpdates,
    dashboardStats,
    salesData,
    deliveryData,
    recentActivity,
    inventoryStats,
    realtimeStats,
  } = useAdminStore();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [image, setImage] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch initial dashboard data
    fetchDashboardStats();

    // Start realtime updates
    const cleanup = startRealtimeUpdates();

    // Cleanup on unmount
    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (activeSection === "users") fetchUsers();
    if (activeSection === "delivery-boys") fetchDeliveryBoys();
    if (activeSection === "orders") fetchOrders();
  }, [activeSection, fetchUsers, fetchDeliveryBoys, fetchOrders]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productname: "",
      desription: "",
      category: "",
      heading1: "",
      desription1: "",
      heading2: "",
      desription2: "",
      qustion1: "",
      answer1: "",
      price: "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (data) => {
    const success = await addProduct(data, image);
    if (success) {
      form.reset();
      setImage(null);
      setShowAddProductForm(false);
    }
  };

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending Payment"
  );
  const activeOrders = orders.filter((order) => order.status === "Active");
  const outForDeliveryOrders = orders.filter(
    (order) => order.status === "Out for Delivery"
  );
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  const renderDashboard = () => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 p-6"
            >
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                </CardHeader>
                <CardContent>
            <div className="text-2xl font-bold">
              ₹{dashboardStats.totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Delivery Partners</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.activeDeliveryPartners}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.activeOrders}
            </div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardStats.totalUsers}
            </div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={salesData} options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: {
                  display: true,
                  text: 'Monthly Sales Data'
                }
              }
            }} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={deliveryData} options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: {
                  display: true,
                  text: 'Weekly Delivery Trends'
                }
              }
            }} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="orders" className="w-full">
            <TabsList>
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="delivery">Top Delivery Partners</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <div className="space-y-4">
                {recentActivity.orders.map(order => (
                  <div key={order._id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Order #{order.razorpayOrderId}</p>
                      <p className="text-sm text-gray-500">
                        {order.items.length} items • ₹{order.totalAmount.toLocaleString()}
                      </p>
                    </div>
                    <Badge className={
                      order.status === "Delivered" ? "bg-green-100 text-green-800" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="delivery">
              <div className="space-y-4">
                {loading ? (
                  <div className="flex justify-center p-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : recentActivity.topDeliveryPartners?.length === 0 ? (
                  <p className="text-gray-500 text-center p-4">No top performers found</p>
                ) : (
                  recentActivity.topDeliveryPartners?.map(partner => (
                    <div key={partner._id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">
                          {partner?.deliveryBoy?.fullName || partner?.name || 'Unknown Partner'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {partner?.totalDeliveries || 0} deliveries • ₹{(partner?.totalEarnings || 0).toLocaleString()} earned
                        </p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">
                        Top Performer
                      </Badge>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
          <p className="text-sm text-gray-600">Manage your platform</p>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            <Button
              variant={activeSection === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("dashboard")}
            >
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeSection === "products" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("products")}
            >
              <Package className="mr-2 h-4 w-4" />
              Products
            </Button>
            <Button
              variant={activeSection === "add-product" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("add-product")}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Button>
            <Button
              variant={activeSection === "users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("users")}
            >
              <User className="mr-2 h-4 w-4" />
              Users
            </Button>
            <Button
              variant={activeSection === "delivery-boys" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("delivery-boys")}
            >
              <Truck className="mr-2 h-4 w-4" />
              Delivery Boys
            </Button>
            <Button
              variant={activeSection === "orders" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("orders")}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-100">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            {activeSection === "dashboard" && "Admin Dashboard"}
            {activeSection === "products" && "Products"}
            {activeSection === "add-product" && "Add New Product"}
            {activeSection === "users" && "Manage Users"}
            {activeSection === "delivery-boys" && "Manage Delivery Boys"}
            {activeSection === "orders" && "Manage Orders"}
          </h1>

          {loading && (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-4">
                <p className="text-red-500">{error}</p>
              </CardContent>
            </Card>
          )}

          {activeSection === "dashboard" && !loading && renderDashboard()}

          {activeSection === "products" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Product list coming soon...</p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Add Product Section */}
          {activeSection === "add-product" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Add New Product</CardTitle>
                    <Button onClick={() => setShowAddProductForm(true)}>
                      Open Form
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Click the button to add a new product to the inventory.
                  </p>
                </CardContent>
              </Card>
              <Sheet
                open={showAddProductForm}
                onOpenChange={setShowAddProductForm}
              >
                <SheetContent
                  className="w-full sm:max-w-2xl overflow-auto"
                  side="right"
                >
                  <SheetHeader>
                    <SheetTitle>Add New Product</SheetTitle>
                  </SheetHeader>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6 p-4"
                    >
                      <FormField
                        control={form.control}
                        name="productname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter product name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="desription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Main Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter main product description"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Oat Drink">
                                  Oat Drink
                                </SelectItem>
                                <SelectItem value="Chilled Oat Drinks">
                                  Chilled Oat Drinks
                                </SelectItem>
                                <SelectItem value="Cooking">Cooking</SelectItem>
                                <SelectItem value="Spread">Spread</SelectItem>
                                <SelectItem value="Oatgurt">Oatgurt</SelectItem>
                                <SelectItem value="Ice Cream">
                                  Ice Cream
                                </SelectItem>
                                <SelectItem value="Soft Serve">
                                  Soft Serve
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="space-y-6 p-4 border rounded-lg">
                        <h2 className="text-xl font-semibold">Section 1</h2>
                        <FormField
                          control={form.control}
                          name="heading1"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Heading 1</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter first heading"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="desription1"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description 1</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter first section description"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="space-y-6 p-4 border rounded-lg">
                        <h2 className="text-xl font-semibold">Section 2</h2>
                        <FormField
                          control={form.control}
                          name="heading2"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Heading 2</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter second heading"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="desription2"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description 2</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter second section description"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="space-y-6 p-4 border rounded-lg">
                        <h2 className="text-xl font-semibold">FAQ</h2>
                        <FormField
                          control={form.control}
                          name="qustion1"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Question 1</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter question"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="answer1"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Answer 1</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter answer"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Enter price"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="space-y-2">
                        <FormLabel>Product Image</FormLabel>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="cursor-pointer"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? "Adding Product..." : "Add Product"}
                      </Button>
                    </form>
                  </Form>
                </SheetContent>
              </Sheet>
            </motion.div>
          )}

          {/* Users Section */}
          {activeSection === "users" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Manage Users</CardTitle>
                </CardHeader>
                <CardContent>
                  {users.length === 0 ? (
                    <p className="text-gray-600">No users found.</p>
                  ) : (
                    <div className="space-y-4">
                      {users.map((user) => (
                        <div
                          key={user._id}
                          className="flex items-center justify-between p-4 border rounded-lg bg-white"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {user.email}
                            </p>
                            <Badge
                              variant={
                                user.isBlocked ? "destructive" : "default"
                              }
                            >
                              {user.isBlocked ? "Blocked" : "Active"}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleBlockUser(user._id)}
                              disabled={loading}
                            >
                              {user.isBlocked ? (
                                <Unlock className="h-4 w-4 mr-2" />
                              ) : (
                                <Lock className="h-4 w-4 mr-2" />
                              )}
                              {user.isBlocked ? "Unblock" : "Block"}
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteUser(user._id)}
                              disabled={loading}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Delivery Boys Section */}
          {activeSection === "delivery-boys" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Manage Delivery Boys</CardTitle>
                </CardHeader>
                <CardContent>
                  {deliveryBoys.length === 0 ? (
                    <p className="text-gray-600">No delivery boys found.</p>
                  ) : (
                    <div className="space-y-4">
                      {deliveryBoys.map((db) => (
                        <div
                          key={db.userId._id}
                          className="flex items-center justify-between p-4 border rounded-lg bg-white"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {db.userId.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {db.userId.email}
                            </p>
                            <Badge
                              variant={
                                db.userId.isBlocked ? "destructive" : "default"
                              }
                            >
                              {db.userId.isBlocked ? "Blocked" : "Active"}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                toggleBlockDeliveryBoy(db.userId._id)
                              }
                              disabled={loading}
                            >
                              {db.userId.isBlocked ? (
                                <Unlock className="h-4 w-4 mr-2" />
                              ) : (
                                <Lock className="h-4 w-4 mr-2" />
                              )}
                              {db.userId.isBlocked ? "Unblock" : "Block"}
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteDeliveryBoy(db.userId._id)}
                              disabled={loading}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Orders Section */}
          {activeSection === "orders" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Manage Orders</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Pending Orders */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-yellow-600">
                      <Clock className="mr-2 h-6 w-6" /> Pending Orders
                      <Badge className="ml-2 bg-yellow-100 text-yellow-800">
                        {pendingOrders.length}
                      </Badge>
                    </h3>
                    {pendingOrders.length === 0 ? (
                      <p className="text-gray-500 italic">
                        No pending orders at the moment.
                      </p>
                    ) : (
                      <ScrollArea className="h-[200px] pr-4">
                        {pendingOrders.map((order) => (
                          <div
                            key={order._id}
                            className="mb-4 p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-gray-800">
                                  Order #{order.razorpayOrderId}
                                </p>
                                <p className="text-sm text-gray-600">
                                  User: {order.userId.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Total: ₹{order.totalAmount.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {order.deliveryAddress.city},{" "}
                                  {order.deliveryAddress.state}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700"
                                onClick={() =>
                                  updateOrderStatus(order._id, "Active")
                                }
                                disabled={loading}
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Mark as Active
                              </Button>
                            </div>
                          </div>
                        ))}
                      </ScrollArea>
                    )}
                  </div>

                  {/* Active Orders */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-600">
                      <ShoppingCart className="mr-2 h-6 w-6" /> Active Orders
                      <Badge className="ml-2 bg-blue-100 text-blue-800">
                        {activeOrders.length}
                      </Badge>
                    </h3>
                    {activeOrders.length === 0 ? (
                      <p className="text-gray-500 italic">
                        No active orders at the moment.
                      </p>
                    ) : (
                      <ScrollArea className="h-[200px] pr-4">
                        {activeOrders.map((order) => (
                          <div
                            key={order._id}
                            className="mb-4 p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-gray-800">
                                  Order #{order.razorpayOrderId}
                                </p>
                                <p className="text-sm text-gray-600">
                                  User: {order.userId.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Total: ₹{order.totalAmount.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {order.deliveryAddress.city},{" "}
                                  {order.deliveryAddress.state}
                                </p>
                              </div>
                              <Select
                                onValueChange={(value) =>
                                  assignDeliveryBoy(order._id, value)
                                }
                                disabled={loading}
                              >
                                <SelectTrigger className="w-[180px] mt-2 bg-blue-50 hover:bg-blue-100 text-blue-700">
                                  <SelectValue placeholder="Assign Delivery" />
                                </SelectTrigger>
                                <SelectContent>
                                  {deliveryBoys.map((db) => (
                                    <SelectItem key={db._id} value={db._id}>
                                      {db.userId.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        ))}
                      </ScrollArea>
                    )}
                  </div>

                  {/* Out for Delivery Orders */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-orange-600">
                      <TruckIcon className="mr-2 h-6 w-6" /> Out for Delivery
                      <Badge className="ml-2 bg-orange-100 text-orange-800">
                        {outForDeliveryOrders.length}
                      </Badge>
                    </h3>
                    {outForDeliveryOrders.length === 0 ? (
                      <p className="text-gray-500 italic">
                        No orders out for delivery.
                      </p>
                    ) : (
                      <ScrollArea className="h-[200px] pr-4">
                        {outForDeliveryOrders.map((order) => (
                          <div
                            key={order._id}
                            className="mb-4 p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-gray-800">
                                  Order #{order.razorpayOrderId}
                                </p>
                                <p className="text-sm text-gray-600">
                                  User: {order.userId.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Delivery:{" "}
                                  {order.deliveryBoyId
                                    ? order.deliveryBoyId.fullName
                                    : "Not Assigned"}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Total: ₹{order.totalAmount.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {order.deliveryAddress.city},{" "}
                                  {order.deliveryAddress.state}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-2 bg-orange-50 hover:bg-orange-100 text-orange-700"
                                onClick={() =>
                                  updateOrderStatus(order._id, "Delivered")
                                }
                                disabled={loading}
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Mark as Delivered
                              </Button>
                            </div>
                          </div>
                        ))}
                      </ScrollArea>
                    )}
                  </div>

                  {/* Delivered Orders */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                      <CheckCircle className="mr-2 h-6 w-6" /> Delivered Orders
                      <Badge className="ml-2 bg-green-100 text-green-800">
                        {deliveredOrders.length}
                      </Badge>
                    </h3>
                    {deliveredOrders.length === 0 ? (
                      <p className="text-gray-500 italic">
                        No delivered orders yet.
                      </p>
                    ) : (
                      <ScrollArea className="h-[200px] pr-4">
                        {deliveredOrders.map((order) => (
                          <div
                            key={order._id}
                            className="mb-4 p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-gray-800">
                                  Order #{order.razorpayOrderId}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {/* User: {order.userId.name} */}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Delivery:{" "}
                                  {order.deliveryBoyId
                                    ? order.deliveryBoyId.fullName
                                    : "Not Assigned"}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Total: ₹{order.totalAmount.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {order.deliveryAddress.city},{" "}
                                  {order.deliveryAddress.state}
                                </p>
                              </div>
                              <Badge className="mt-2 bg-green-50 text-green-700">
                                Completed
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </ScrollArea>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
