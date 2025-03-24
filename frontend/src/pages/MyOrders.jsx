import React, { useEffect, useState } from "react";
import { useProductStore } from "@/store/Store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Package,
  Clock,
  Home,
  ShoppingCart,
  CheckCircle,
  XCircle,
  Settings,
  Bell,
  LogOut,
  Mail,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import Error from "./Error";

function MyOrders() {
  const {
    fetchOrders,
    orders,
    cancelOrder,
    fetchUser,
    user,
    updateUser,
    loading,
    error,
    logOut,
  } = useProductStore();

  
  const [activeSection, setActiveSection] = useState("profile");
  const [showProfileForm, setShowProfileForm] = useState(false);

  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, [fetchUser, fetchOrders]);

  const currentOrders = orders.filter((order) =>
    ["Pending", "Assigned", "Out for Delivery"].includes(order.status)
  );
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );
  const cancelledOrders = orders.filter(
    (order) => order.status === "Cancelled"
  );

  const form = useForm({
    defaultValues: {
      name: user?.name || "",
      mobile: user?.mobile || "",
      address1: user?.deliveryAddress?.address1 || "",
      address2: user?.deliveryAddress?.address2 || "",
      city: user?.deliveryAddress?.city || "",
      state: user?.deliveryAddress?.state || "",
      zipcode: user?.deliveryAddress?.zipcode || "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || "",
        mobile: user.mobile || "",
        address1: user.deliveryAddress?.address1 || "",
        address2: user.deliveryAddress?.address2 || "",
        city: user.deliveryAddress?.city || "",
        state: user.deliveryAddress?.state || "",
        zipcode: user.deliveryAddress?.zipcode || "",
      });
    }
  }, [user, form]);

  const onSubmit = (data) => {
    const updatedUser = {
      name: data.name,
      mobile: data.mobile,
      deliveryAddress: {
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
      },
    };
    console.log("Updating user with:", updatedUser);
    updateUser(updatedUser);
    setShowProfileForm(false);
  };

  const statusVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
  };

  return user?.role === "user" ? (
    <div className="flex h-screen pt-16 bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        
        <Separator />
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            <Button
              variant={activeSection === "profile" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              User Profile
            </Button>
            <Button
              variant={activeSection === "current" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("current")}
            >
              <Package className="mr-2 h-4 w-4" />
              Current Orders
              {currentOrders.length > 0 && (
                <Badge className="ml-auto" variant="destructive">
                  {currentOrders.length}
                </Badge>
              )}
            </Button>
            <Button
              variant={activeSection === "delivered" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("delivered")}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Delivered Orders
            </Button>
            <Button
              variant={activeSection === "cancelled" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("cancelled")}
            >
              <XCircle className="mr-2 h-4 w-4" />
              Cancelled Orders
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
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={() => logOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </ScrollArea>
        <Separator />
        <div className="p-4">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>{user?.name?.charAt(0) || "A"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">
                {user?.name || "Admin User"}
              </p>
              <p className="text-xs text-gray-500">User</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-100">
        <div className="p-6">
          {error && (
            <Card className="mb-6 border-red-200 bg-red-50">
              <CardContent className="p-4">
                <p className="text-red-500">{error}</p>
              </CardContent>
            </Card>
          )}

          {/* Profile Section */}
          {activeSection === "profile" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-6">User Profile</h1>
              <Card className="shadow-lg mb-6 ">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Profile Information</CardTitle>
                    <Sheet
                      open={showProfileForm}
                      onOpenChange={setShowProfileForm}
                    >
                      <SheetTrigger asChild>
                        <Button>Edit Profile</Button>
                      </SheetTrigger>
                      <SheetContent
                        className="w-full sm:max-w-lg overflow-auto"
                        side="right"
                      >
                        <SheetHeader>
                          <SheetTitle>Edit Profile</SheetTitle>
                          <SheetDescription>
                            Update your personal information and delivery
                            address
                          </SheetDescription>
                        </SheetHeader>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                          >
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input {...field} placeholder="Your Name" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="mobile"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Mobile</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="Your Mobile"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Separator className="my-4" />
                            <h3 className="text-md font-medium">
                              Delivery Address
                            </h3>
                            <FormField
                              control={form.control}
                              name="address1"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address Line 1</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="Address Line 1"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="address2"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address Line 2</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="Address Line 2"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="grid grid-cols-3 gap-4">
                              <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="City" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="State" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="zipcode"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Zipcode</FormLabel>
                                    <FormControl>
                                      <Input {...field} placeholder="Zipcode" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="flex justify-end gap-2 mt-6">
                              <Button
                                variant="outline"
                                onClick={() => setShowProfileForm(false)}
                              >
                                Cancel
                              </Button>
                              <Button type="submit">Update Profile</Button>
                            </div>
                          </form>
                        </Form>
                      </SheetContent>
                    </Sheet>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Personal Details
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="font-medium">Name:</span>
                          <span className="ml-2">
                            {user?.name || "Not specified"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="font-medium">Mobile:</span>
                          <span className="ml-2">
                            {user?.mobile || "Not specified"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="font-medium">Email:</span>
                          <span className="ml-2">
                            {user?.email || "Not specified"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Delivery Address
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Home className="h-4 w-4 mr-2 mt-1 text-gray-500" />
                          <div>
                            <p>{user?.address1 || "No address specified"},</p>
                            {user?.city && (
                              <p>
                                {user.city}, {user.state} {user.zipcode}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Account Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">
                              Active Orders
                            </p>
                            <p className="text-3xl font-bold">
                              {currentOrders.length}
                            </p>
                          </div>
                          <Package className="h-8 w-8 text-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">
                              Delivered Orders
                            </p>
                            <p className="text-3xl font-bold">
                              {deliveredOrders.length}
                            </p>
                          </div>
                          <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-red-50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">
                              Cancelled Orders
                            </p>
                            <p className="text-3xl font-bold">
                              {cancelledOrders.length}
                            </p>
                          </div>
                          <XCircle className="h-8 w-8 text-red-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Current Orders Section */}
          {activeSection === "current" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Current Orders</h1>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {currentOrders.length} active orders
                </Badge>
              </div>

              {currentOrders.length === 0 ? (
                <Card className="shadow-md">
                  <CardContent className="p-8 flex flex-col items-center justify-center">
                    <Package className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">
                      No Current Orders
                    </h3>
                    <p className="text-gray-500 mt-2">
                      All orders have been delivered or cancelled
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {currentOrders.map((order) => (
                      <motion.div
                        key={order.orderId}
                        variants={statusVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full"
                      >
                        <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-lg">
                                Order #{order.orderId}
                              </CardTitle>
                              <motion.div
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  order.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : order.status === "Assigned"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                {order.status}
                              </motion.div>
                            </div>
                            <CardDescription>
                              Created on:{" "}
                              {new Date(order.createdAt).toLocaleString()}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-start space-x-4">
                              {order.items &&
                              order.items.length > 0 &&
                              order.items[0].productImage ? (
                                <img
                                  src={order.items[0].productImage}
                                  alt={
                                    order.items[0].productName ||
                                    "Product Image"
                                  }
                                  className="w-24 h-24 object-cover rounded"
                                  onError={(e) => {
                                    console.log(
                                      `Image failed to load for Order #${order.orderId}`
                                    );
                                    e.target.src = "/fallback-image.png";
                                  }}
                                />
                              ) : (
                                <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                  <ShoppingCart className="h-8 w-8 text-gray-400" />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <p className="font-medium">Total Amount:</p>
                                  <p className="font-bold">
                                    ₹{order.totalAmount}
                                  </p>
                                </div>
                                <div className="flex justify-between mt-1">
                                  <p className="font-medium">Items:</p>
                                  <p>{order.items.length}</p>
                                </div>
                                <div className="mt-2">
                                  <p className="font-medium mb-1">
                                    Delivery Address:
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {order.deliveryAddress?.address1},{" "}
                                    {order.deliveryAddress?.city}
                                  </p>
                                </div>
                                {order.status === "Pending" && (
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    className="mt-4 w-full"
                                    onClick={() => cancelOrder(order.orderId)}
                                  >
                                    Cancel Order
                                  </Button>
                                )}
                              </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="mt-2">
                              <p className="font-medium mb-2">Order Items:</p>
                              <div className="space-y-2">
                                {order.items.map((item, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-center"
                                  >
                                    <span className="text-sm">
                                      {item.productName}
                                    </span>
                                    <span className="text-sm font-medium">
                                      ₹{item.price} x {item.quantity}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}

          {/* Delivered Orders Section */}
          {activeSection === "delivered" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Delivered Orders</h1>
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm bg-green-50"
                >
                  {deliveredOrders.length} delivered
                </Badge>
              </div>

              {deliveredOrders.length === 0 ? (
                <Card className="shadow-md">
                  <CardContent className="p-8 flex flex-col items-center justify-center">
                    <CheckCircle className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">
                      No Delivered Orders
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Your delivered orders will appear here
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deliveredOrders.map((order) => (
                    <Card
                      key={order.orderId}
                      className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">
                            Order #{order.orderId}
                          </CardTitle>
                          <Badge
                            variant="success"
                            className="bg-green-100 text-green-800"
                          >
                            Delivered
                          </Badge>
                        </div>
                        <CardDescription>
                          Delivered on:{" "}
                          {new Date(
                            order.deliveredAt || order.createdAt
                          ).toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start space-x-4">
                          {order.items &&
                          order.items.length > 0 &&
                          order.items[0].productImage ? (
                            <img
                              src={order.items[0].productImage}
                              alt={
                                order.items[0].productName || "Product Image"
                              }
                              className="w-24 h-24 object-cover rounded"
                              onError={(e) => {
                                console.log(
                                  `Image failed to load for Order #${order.orderId}`
                                );
                                e.target.src = "/fallback-image.png";
                              }}
                            />
                          ) : (
                            <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                              <ShoppingCart className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="font-medium">Total Amount:</p>
                              <p className="font-bold">₹{order.totalAmount}</p>
                            </div>
                            <div className="flex justify-between mt-1">
                              <p className="font-medium">Items:</p>
                              <p>{order.items.length}</p>
                            </div>
                            <div className="mt-2">
                              <p className="font-medium mb-1">
                                Delivery Address:
                              </p>
                              <p className="text-sm text-gray-600">
                                {order.deliveryAddress?.address1},{" "}
                                {order.deliveryAddress?.city}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="mt-2">
                          <p className="font-medium mb-2">Order Items:</p>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center"
                              >
                                <span className="text-sm">
                                  {item.productName}
                                </span>
                                <span className="text-sm Sparrow font-medium">
                                  ₹{item.price} x {item.quantity}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Cancelled Orders Section */}
          {activeSection === "cancelled" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Cancelled Orders</h1>
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm bg-red-50"
                >
                  {cancelledOrders.length} cancelled
                </Badge>
              </div>

              {cancelledOrders.length === 0 ? (
                <Card className="shadow-md">
                  <CardContent className="p-8 flex flex-col items-center justify-center">
                    <XCircle className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">
                      No Cancelled Orders
                    </h3>
                    <p className="text-gray-500 mt-2">
                      Your cancelled orders will appear here
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cancelledOrders.map((order) => (
                    <Card
                      key={order.orderId}
                      className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">
                            Order #{order.orderId}
                          </CardTitle>
                          <Badge
                            variant="destructive"
                            className="bg-red-100 text-red-800"
                          >
                            Cancelled
                          </Badge>
                        </div>
                        <CardDescription>
                          Cancelled on:{" "}
                          {new Date(order.createdAt).toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start space-x-4">
                          {order.items &&
                          order.items.length > 0 &&
                          order.items[0].productImage ? (
                            <img
                              src={order.items[0].productImage}
                              alt={
                                order.items[0].productName || "Product Image"
                              }
                              className="w-24 h-24 object-cover rounded"
                              onError={(e) => {
                                console.log(
                                  `Image failed to load for Order #${order.orderId}`
                                );
                                e.target.src = "/fallback-image.png";
                              }}
                            />
                          ) : (
                            <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                              <ShoppingCart className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="font-medium">Total Amount:</p>
                              <p className="font-bold">₹{order.totalAmount}</p>
                            </div>
                            <div className="flex justify-between mt-1">
                              <p className="font-medium">Items:</p>
                              <p>{order.items.length}</p>
                            </div>
                            <div className="mt-2">
                              <p className="font-medium mb-1">
                                Delivery Address:
                              </p>
                              <p className="text-sm text-gray-600">
                                {order.deliveryAddress?.address1},{" "}
                                {order.deliveryAddress?.city}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="mt-2">
                          <p className="font-medium mb-2">Order Items:</p>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center"
                              >
                                <span className="text-sm">
                                  {item.productName}
                                </span>
                                <span className="text-sm font-medium">
                                  ₹{item.price} x {item.quantity}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Error msg="Only Logged In And Customer Can Access The Page..." />
  );
}

export default MyOrders;
