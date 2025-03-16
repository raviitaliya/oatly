import React, { useState, useEffect } from "react";
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
  LogOut,
  Trash2,
  Lock,
  Unlock,
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
    loading,
    error,
  } = useAdminStore();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [image, setImage] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (activeSection === "users") fetchUsers();
    if (activeSection === "delivery-boys") fetchDeliveryBoys();
  }, [activeSection, fetchUsers, fetchDeliveryBoys]);

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

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast({ title: "Success", description: "Logged out successfully" });
  };

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
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
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

          {/* Dashboard Section */}
          {activeSection === "dashboard" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Welcome to Admin Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Manage products, users, delivery boys, and more from this
                    dashboard.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Products Section */}
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
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{user.name}</p>
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
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{db.userId.name}</p>
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
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
