import React, { useEffect, useState, useCallback } from "react";
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
  Truck,
  CheckCircle,
  Settings,
  Bell,
  LogOut,
  DollarSign,
  RefreshCw,
  Mail,
  Clock,
  Home,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import { useProductStore } from "@/store/Store";

function DeliveryBoyDashboard() {
  const {
    profile,
    earnings,
    assignedOrders,
    loading,
    error,
    fetchAssignedOrders,
    acceptOrder,
    updateOrderStatus,
    getDeliveryBoyProfile,
    user,
    toggleAvailability,
    deliveryProfile,
  } = useProductStore();

  const isAvailable = deliveryProfile?.isAvailable ?? false;

  const [activeSection, setActiveSection] = useState("profile");
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [deliveryInterval, setDeliveryInterval] = useState(null);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [deliveredOrdersHistory, setDeliveredOrdersHistory] = useState(() => {
    const saved = localStorage.getItem("deliveredOrdersHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Initial data fetch
  useEffect(() => {
    console.log("Initial fetch triggered");
    getDeliveryBoyProfile();
    fetchAssignedOrders();
  }, [getDeliveryBoyProfile, fetchAssignedOrders]);

  // Persist delivered orders history to localStorage
  useEffect(() => {
    localStorage.setItem(
      "deliveredOrdersHistory",
      JSON.stringify(deliveredOrdersHistory)
    );
  }, [deliveredOrdersHistory]);

  // Memoized refresh handler
  const handleRefresh = useCallback(async () => {
    try {
      console.log("Manual refresh triggered");
      await fetchAssignedOrders();
    } catch (err) {
      console.error("Error during manual refresh:", err);
    }
  }, [fetchAssignedOrders]);

  // Filter orders
  const orderRequests = assignedOrders.filter(
    (order) => order.status === "Pending"
  );
  const activeOrders = assignedOrders.filter((order) =>
    ["Assigned", "Out for Delivery"].includes(order.status)
  );
  const currentDeliveredOrders = assignedOrders.filter(
    (order) => order.status === "Delivered"
  );
  const totalDeliveredOrders =
    profile?.totalDeliveredOrders ??
    deliveredOrdersHistory.length + currentDeliveredOrders.length;
  const allDeliveredOrders = [
    ...deliveredOrdersHistory,
    ...currentDeliveredOrders,
  ];

  const handleAcceptOrder = useCallback(
    (orderId) => {
      console.log("Accepting Order:", orderId);
      acceptOrder(orderId);
    },
    [acceptOrder]
  );

  const handleStartDelivery = useCallback(
    (orderId) => {
      console.log("Starting Delivery for Order:", orderId);
      if (deliveryInterval) {
        console.log("Clearing previous delivery interval");
        clearInterval(deliveryInterval);
        setDeliveryInterval(null);
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = [
            position.coords.longitude,
            position.coords.latitude,
          ];
          updateOrderStatus(orderId, "Out for Delivery", coordinates);
          setActiveOrderId(orderId);

          const interval = setInterval(() => {
            console.log("Geolocation update for order:", orderId);
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                const newCoords = [pos.coords.longitude, pos.coords.latitude];
                console.log("Sending new coordinates:", newCoords);
                updateOrderStatus(orderId, "Out for Delivery", newCoords);
              },
              (err) => console.error("Geolocation Error:", err)
            );
          }, 10000);
          setDeliveryInterval(interval);
        },
        (err) => {
          console.error("Geolocation Error:", err);
          updateOrderStatus(orderId, "Out for Delivery");
        }
      );
    },
    [deliveryInterval, updateOrderStatus]
  );

  const handleMarkDelivered = useCallback(
    (orderId) => {
      console.log("Marking Order as Delivered:", orderId);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = [
            position.coords.longitude,
            position.coords.latitude,
          ];
          // Call updateOrderStatus and wait for it to complete
          updateOrderStatus(orderId, "Delivered", coordinates)
            .then(() => {
              console.log(`Order ${orderId} marked as Delivered successfully`);
              const deliveredOrder = assignedOrders.find(
                (order) => order.orderId === orderId
              );
              if (
                deliveredOrder &&
                !deliveredOrdersHistory.some(
                  (o) => o.orderId === deliveredOrder.orderId
                )
              ) {
                setDeliveredOrdersHistory((prev) => [
                  ...prev,
                  {
                    ...deliveredOrder,
                    deliveredAt: new Date(),
                    status: "Delivered",
                  },
                ]);
              }
              if (deliveryInterval) {
                console.log("Clearing delivery interval");
                clearInterval(deliveryInterval);
                setDeliveryInterval(null);
              }
              setActiveOrderId(null);
              // Fetch updated orders to ensure UI reflects server state
              fetchAssignedOrders();
            })
            .catch((err) => {
              console.error("Failed to mark order as delivered:", err);
            });
        },
        (err) => {
          console.error("Geolocation Error:", err);
          updateOrderStatus(orderId, "Delivered")
            .then(() => {
              const deliveredOrder = assignedOrders.find(
                (order) => order.orderId === orderId
              );
              if (
                deliveredOrder &&
                !deliveredOrdersHistory.some(
                  (o) => o.orderId === deliveredOrder.orderId
                )
              ) {
                setDeliveredOrdersHistory((prev) => [
                  ...prev,
                  {
                    ...deliveredOrder,
                    deliveredAt: new Date(),
                    status: "Delivered",
                  },
                ]);
              }
              if (deliveryInterval) {
                console.log("Clearing delivery interval (error case)");
                clearInterval(deliveryInterval);
                setDeliveryInterval(null);
              }
              setActiveOrderId(null);
              fetchAssignedOrders();
            })
            .catch((err) => {
              console.error(
                "Failed to mark order as delivered (no coords):",
                err
              );
            });
        }
      );
    },
    [
      assignedOrders,
      deliveryInterval,
      updateOrderStatus,
      fetchAssignedOrders,
      deliveredOrdersHistory,
    ]
  );

  const form = useForm({
    defaultValues: {
      fullName: profile?.fullName || "",
      mobile: profile?.mobile || "",
      address1: profile?.address?.address1 || "",
      address2: profile?.address?.address2 || "",
      city: profile?.address?.city || "",
      state: profile?.address?.state || "",
      zipcode: profile?.address?.zipcode || "",
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        fullName: profile.fullName || "",
        mobile: profile.mobile || "",
        address1: profile.address?.address1 || "",
        address2: profile.address?.address2 || "",
        city: profile.address?.city || "",
        state: profile.address?.state || "",
        zipcode: profile.address?.zipcode || "",
      });
    }
  }, [profile, form]);

  const onSubmit = (data) => {
    const updatedProfile = {
      fullName: data.fullName,
      mobile: data.mobile,
      address: {
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
      },
    };
    console.log("Updating profile with:", updatedProfile);
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

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Delivery Dashboard
          </h2>
          <p className="text-sm text-gray-600">Manage your deliveries</p>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            <Button
              variant={activeSection === "profile" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("profile")}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant={activeSection === "requests" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("requests")}
            >
              <Package className="mr-2 h-4 w-4" />
              Order Requests
              {orderRequests.length > 0 && (
                <Badge className="ml-auto" variant="destructive">
                  {orderRequests.length}
                </Badge>
              )}
            </Button>
            <Button
              variant={activeSection === "active" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("active")}
            >
              <Truck className="mr-2 h-4 w-4" />
              Active Orders
              {activeOrders.length > 0 && (
                <Badge className="ml-auto" variant="secondary">
                  {activeOrders.length}
                </Badge>
              )}
            </Button>
            <Button
              variant={activeSection === "history" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("history")}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Order History
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
              onClick={toggleAvailability}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {isAvailable ? "Go Offline" : "Go Online"}
            </Button>
          </div>
        </ScrollArea>
        <Separator />
        <div className="p-4">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>
                {profile?.fullName?.charAt(0) || "D"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">
                {profile?.fullName || "Delivery Boy"}
              </p>
              <p className="text-xs text-gray-500">
                {isAvailable ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-gray-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              {activeSection === "profile" && "Delivery Profile"}
              {activeSection === "requests" && "Order Requests"}
              {activeSection === "active" && "Active Orders"}
              {activeSection === "history" && "Order History"}
            </h1>
            {isAvailable && (
              <Button
                variant="outline"
                onClick={handleRefresh}
                disabled={loading}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Orders
              </Button>
            )}
          </div>

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

          {activeSection === "profile" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg mb-6">
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
                            Update your personal information and address
                          </SheetDescription>
                        </SheetHeader>
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                          >
                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input
                                      {...field}
                                      placeholder="Your Full Name"
                                    />
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
                            <h3 className="text-md font-medium">Address</h3>
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
                      <h3 className="text-lg font-semibold mb-4">Address</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Home className="h-4 w-4 mr-2 mt-1 text-gray-500" />
                          <div>
                            <p>{user?.address1 || "No address specified"},</p>
                            {user?.city && (
                              <p>
                                {user?.city}, {user?.state} {user?.zipcode}
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
                  <CardTitle>Performance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Card className="bg-blue-50">
                      <CardContent className="p-6">
                        <div className=" lực justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">
                              Total Delivered
                            </p>
                            <p className="text-3xl font-bold">
                              {totalDeliveredOrders || 0}
                            </p>
                          </div>
                          <CheckCircle className="h-8 w-8 text-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-green-50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">
                              Total Earnings
                            </p>
                            <p className="text-3xl font-bold">
                              ₹{earnings || 0}
                            </p>
                          </div>
                          <DollarSign className="h-8 w-8 text-green-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-yellow-50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">
                              Availability
                            </p>
                            <p className="text-xl font-bold">
                              {isAvailable ? "Online" : "Offline"}
                            </p>
                          </div>
                          <Badge
                            className={
                              isAvailable ? "bg-green-500" : "bg-red-500"
                            }
                          >
                            {isAvailable ? "ON" : "OFF"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeSection === "requests" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {orderRequests.length} pending
                </Badge>
              </div>
              {orderRequests.length === 0 ? (
                <Card className="shadow-md">
                  <CardContent className="p-8 flex flex-col items-center justify-center">
                    <Package className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">
                      No Order Requests
                    </h3>
                    <p className="text-gray-500 mt-2">
                      No new orders to accept
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {orderRequests.map((order) => (
                      <motion.div
                        key={order.orderId}
                        variants={statusVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full"
                      >
                        <Card className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">
                              Order #{order.orderId}
                            </CardTitle>
                            <CardDescription>
                              Created on:{" "}
                              {new Date(order.createdAt).toLocaleString()}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-start space-x-4">
                              <div className="w-24 h-24 rounded flex items-center justify-center">
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
                                      e.target.src = "/fallback-image.png";
                                    }}
                                  />
                                ) : (
                                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">
                                  Customer: {order.customerName}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Mobile: {order.customerMobile}
                                </p>
                                <p className="font-medium mt-1">
                                  Total: ₹{order.totalAmount}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  Address: {order.deliveryAddress.address1},{" "}
                                  {order.deliveryAddress.city}
                                </p>
                                <Button
                                  className="mt-4 w-full"
                                  onClick={() =>
                                    handleAcceptOrder(order.orderId)
                                  }
                                >
                                  Accept Order
                                </Button>
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

          {activeSection === "active" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {activeOrders.length} active
                </Badge>
              </div>
              {activeOrders.length === 0 ? (
                <Card className="shadow-md">
                  <CardContent className="p-8 flex flex-col items-center justify-center">
                    <Truck className="h-16 w-16 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-700">
                      No Active Orders
                    </h3>
                    <p className="text-gray-500 mt-2">
                      No orders currently in delivery
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {activeOrders.map((order) => (
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
                              <Badge
                                className={
                                  order.status === "Assigned"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                                }
                              >
                                {order.status}
                              </Badge>
                            </div>
                            <CardDescription>
                              Created on:{" "}
                              {new Date(order.createdAt).toLocaleString()}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-start space-x-4">
                              <div className="w-24 h-24 rounded flex items-center justify-center">
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
                                      e.target.src = "/fallback-image.png";
                                    }}
                                  />
                                ) : (
                                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">
                                  Customer: {order.customerName}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Mobile: {order.customerMobile}
                                </p>
                                <p className="font-medium mt-1">
                                  Total: ₹{order.totalAmount}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  Address: {order.deliveryAddress.address1},{" "}
                                  {order.deliveryAddress.city}
                                </p>
                                {order.status === "Assigned" ? (
                                  <Button
                                    className="mt-4 w-full bg-green-500 hover:bg-green-600"
                                    onClick={() =>
                                      handleStartDelivery(order.orderId)
                                    }
                                  >
                                    Start Delivery
                                  </Button>
                                ) : (
                                  <Button
                                    className="mt-4 w-full bg-purple-500 hover:bg-purple-600"
                                    onClick={() =>
                                      handleMarkDelivered(order.orderId)
                                    }
                                  >
                                    Mark Delivered
                                  </Button>
                                )}
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

          {activeSection === "history" && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm bg-green-50"
                >
                  {allDeliveredOrders.length} delivered
                </Badge>
              </div>
              {allDeliveredOrders.length === 0 ? (
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
                  {allDeliveredOrders.map((order) => (
                    <Card
                      key={order.orderId}
                      className="shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          Order #{order.orderId}
                        </CardTitle>
                        <CardDescription>
                          Delivered on:{" "}
                          {new Date(
                            order.deliveredAt || order.createdAt
                          ).toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start space-x-4">
                          <div className="w-24 h-24  rounded flex items-center justify-center">
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
                                  e.target.src = "/fallback-image.png";
                                }}
                              />
                            ) : (
                              <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                <ShoppingCart className="h-8 w-8 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">
                              Customer: {order.customerName}
                            </p>
                            <p className="text-sm text-gray-600">
                              Mobile: {order.customerMobile}
                            </p>
                            <p className="font-medium mt-1">
                              Total: ₹{order.totalAmount}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              Address: {order.deliveryAddress.address1},{" "}
                              {order.deliveryAddress.city}
                            </p>
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
  );
}

export default DeliveryBoyDashboard;
