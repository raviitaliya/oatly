import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import axios from "axios"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  productname: z.string().min(2, "Product name is required"),
  desription: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category is required"),
  heading1: z.string().min(2, "Heading 1 is required"),
  desription1: z.string().min(10, "Description 1 must be at least 10 characters"),
  heading2: z.string().min(2, "Heading 2 is required"),
  desription2: z.string().min(10, "Description 2 must be at least 10 characters"),
  qustion1: z.string().min(2, "Question 1 is required"),
  answer1: z.string().min(2, "Answer 1 is required"),
  price: z.string().min(1, "Price is required"),
})

const AddProduct = () => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

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
  })

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      
      const formData = new FormData()
      formData.append("productname", data.productname)
      formData.append("desription", data.desription)
      formData.append("category", data.category)
      formData.append("heading1", data.heading1)
      formData.append("desription1", data.desription1)
      formData.append("heading2", data.heading2)
      formData.append("desription2", data.desription2)
      formData.append("qustion1", data.qustion1)
      formData.append("answer1", data.answer1)
      formData.append("price", data.price)
      if (image) {
        formData.append("image", image)
      }

      // Make API call
      const response = await axios.post("http://localhost:8000/api/admin/addProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      if (response.data) {
        toast({
          title: "Success",
          description: "Product added successfully",
        })
        form.reset()
        setImage(null)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="productname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
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
                  <Textarea placeholder="Enter main product description" {...field} />
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
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Oat Drink">Oat Drink</SelectItem>
                    <SelectItem value="Chilled Oat Drinks">Chilled Oat Drinks</SelectItem>
                    <SelectItem value="Cooking">Cooking</SelectItem>
                    <SelectItem value="Spread">Spread</SelectItem>
                    <SelectItem value="Oatgurt">Oatgurt</SelectItem>
                    <SelectItem value="Ice Cream">Ice Cream</SelectItem>
                    <SelectItem value="Soft Serve">Soft Serve</SelectItem>
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
                    <Input placeholder="Enter first heading" {...field} />
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
                    <Textarea placeholder="Enter first section description" {...field} />
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
                    <Input placeholder="Enter second heading" {...field} />
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
                    <Textarea placeholder="Enter second section description" {...field} />
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
                    <Input placeholder="Enter question" {...field} />
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
                    <Textarea placeholder="Enter answer" {...field} />
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
                  <Input type="number" placeholder="Enter stock quantity" {...field} />
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

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Adding Product..." : "Add Product"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default AddProduct 