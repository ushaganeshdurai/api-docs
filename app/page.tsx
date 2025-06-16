"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Server, Database, Zap, Shield, Code, Users, Package, FileText, ExternalLink } from "lucide-react"

export default function Home() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative">
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 p-0 text-slate-400 hover:text-slate-100"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )

  const EndpointCard = ({
    method,
    path,
    description,
    requestBody,
    response,
    methodColor,
  }: {
    method: string
    path: string
    description: string
    requestBody?: string
    response: string
    methodColor: string
  }) => (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge className={`${methodColor} text-white font-mono text-xs px-2 py-1`}>{method}</Badge>
          <code className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">{path}</code>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="response" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            {requestBody && <TabsTrigger value="request">Request</TabsTrigger>}
            <TabsTrigger value="response">Response</TabsTrigger>
          </TabsList>
          {requestBody && (
            <TabsContent value="request" className="mt-4">
              <CodeBlock code={requestBody} id={`${method}-${path}-request`} />
            </TabsContent>
          )}
          <TabsContent value="response" className="mt-4">
            <CodeBlock code={response} id={`${method}-${path}-response`} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-slate-900">Hono API</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-slate-600 hover:text-slate-900 transition-colors">
                Overview
              </a>
              <a href="#endpoints" className="text-slate-600 hover:text-slate-900 transition-colors">
                Endpoints
              </a>
              <a href="#getting-started" className="text-slate-600 hover:text-slate-900 transition-colors">
                Getting Started
              </a>
                <Button
                asChild
                variant="outline"
                size="sm"
                >
                <a
                  href="https://github.com/ushaganeshdurai/dummyapi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub
                </a>
                </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Fast & Lightweight REST API
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Modern REST API
            <span className="text-emerald-600 block">Built with Hono</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            A high-performance REST API built with Hono.js, featuring full CRUD operations for Products, Users, and
            Posts. Simple, fast, and developer-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Code className="h-5 w-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="overview" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">API Features</h2>
            <p className="text-slate-600 text-lg">Everything you need for modern web development</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Products Management</h3>
              <p className="text-slate-600">
                Complete CRUD operations for product catalog with pricing and descriptions.
              </p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Management</h3>
              <p className="text-slate-600">Handle user profiles with email, age, and personal information securely.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Posts</h3>
              <p className="text-slate-600">Create and manage blog posts or articles with author attribution.</p>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-slate-600">Built with Hono.js for ultra-fast response times and minimal overhead.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 text-rose-600 rounded-lg mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">In-Memory Storage</h3>
              <p className="text-slate-600">Fast in-memory database for development and testing purposes.</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-lg mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Type Safe</h3>
              <p className="text-slate-600">Full TypeScript support with proper type definitions and validation.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section id="endpoints" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">API Endpoints</h2>
            <p className="text-slate-600 text-lg">Complete reference for all available endpoints</p>
          </div>

          {/* Base URL */}
          <Card className="mb-8 bg-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Base URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <code className="text-lg font-mono bg-white px-4 py-2 rounded border">http://localhost:8787</code> or  <code className="text-lg font-mono bg-white px-4 py-2 rounded border">https://dummyapi-1xsj.onrender.com</code>
            </CardContent>
          </Card>

          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="products" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Products
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="posts" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Posts
              </TabsTrigger>
            </TabsList>

            {/* Products Endpoints */}
            <TabsContent value="products" className="mt-8">
              <div className="space-y-6">
                <EndpointCard
                  method="GET"
                  path="/products"
                  description="Retrieve all products"
                  methodColor="bg-emerald-600"
                  response={`[
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99,
    "description": "High-performance laptop"
  },
  {
    "id": 2,
    "name": "Mouse",
    "price": 29.99,
    "description": "Wireless mouse"
  }
]`}
                />
                <EndpointCard
                  method="GET"
                  path="/products/:id"
                  description="Retrieve a specific product by ID"
                  methodColor="bg-emerald-600"
                  response={`{
  "id": 1,
  "name": "Laptop",
  "price": 999.99,
  "description": "High-performance laptop"
}`}
                />
                <EndpointCard
                  method="POST"
                  path="/products"
                  description="Create a new product"
                  methodColor="bg-blue-600"
                  requestBody={`{
  "name": "Keyboard",
  "price": 79.99,
  "description": "Mechanical keyboard"
}`}
                  response={`{
  "id": 3,
  "name": "Keyboard",
  "price": 79.99,
  "description": "Mechanical keyboard"
}`}
                />
                <EndpointCard
                  method="PUT"
                  path="/products/:id"
                  description="Update an existing product"
                  methodColor="bg-amber-600"
                  requestBody={`{
  "name": "Gaming Laptop",
  "price": 1299.99,
  "description": "High-end gaming laptop"
}`}
                  response={`{
  "id": 1,
  "name": "Gaming Laptop",
  "price": 1299.99,
  "description": "High-end gaming laptop"
}`}
                />
                <EndpointCard
                  method="DELETE"
                  path="/products/:id"
                  description="Delete a product"
                  methodColor="bg-red-600"
                  response={`{
  "id": 1,
  "name": "Laptop",
  "price": 999.99,
  "description": "High-performance laptop"
}`}
                />
              </div>
            </TabsContent>

            {/* Users Endpoints */}
            <TabsContent value="users" className="mt-8">
              <div className="space-y-6">
                <EndpointCard
                  method="GET"
                  path="/users"
                  description="Retrieve all users"
                  methodColor="bg-emerald-600"
                  response={`[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 25
  }
]`}
                />
                <EndpointCard
                  method="GET"
                  path="/users/:id"
                  description="Retrieve a specific user by ID"
                  methodColor="bg-emerald-600"
                  response={`{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}`}
                />
                <EndpointCard
                  method="POST"
                  path="/users"
                  description="Create a new user"
                  methodColor="bg-blue-600"
                  requestBody={`{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "age": 28
}`}
                  response={`{
  "id": 3,
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "age": 28
}`}
                />
                <EndpointCard
                  method="PUT"
                  path="/users/:id"
                  description="Update an existing user"
                  methodColor="bg-amber-600"
                  requestBody={`{
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "age": 31
}`}
                  response={`{
  "id": 1,
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "age": 31
}`}
                />
                <EndpointCard
                  method="DELETE"
                  path="/users/:id"
                  description="Delete a user"
                  methodColor="bg-red-600"
                  response={`{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}`}
                />
              </div>
            </TabsContent>

            {/* Posts Endpoints */}
            <TabsContent value="posts" className="mt-8">
              <div className="space-y-6">
                <EndpointCard
                  method="GET"
                  path="/posts"
                  description="Retrieve all posts"
                  methodColor="bg-emerald-600"
                  response={`[
  {
    "id": 1,
    "title": "Getting Started with Hono",
    "content": "Hono is a fast web framework...",
    "author": "John Doe"
  },
  {
    "id": 2,
    "title": "API Best Practices",
    "content": "When building APIs...",
    "author": "Jane Smith"
  }
]`}
                />
                <EndpointCard
                  method="GET"
                  path="/posts/:id"
                  description="Retrieve a specific post by ID"
                  methodColor="bg-emerald-600"
                  response={`{
  "id": 1,
  "title": "Getting Started with Hono",
  "content": "Hono is a fast web framework...",
  "author": "John Doe"
}`}
                />
                <EndpointCard
                  method="POST"
                  path="/posts"
                  description="Create a new post"
                  methodColor="bg-blue-600"
                  requestBody={`{
  "title": "TypeScript Tips",
  "content": "Here are some useful TypeScript tips...",
  "author": "Alice Johnson"
}`}
                  response={`{
  "id": 3,
  "title": "TypeScript Tips",
  "content": "Here are some useful TypeScript tips...",
  "author": "Alice Johnson"
}`}
                />
                <EndpointCard
                  method="PUT"
                  path="/posts/:id"
                  description="Update an existing post"
                  methodColor="bg-amber-600"
                  requestBody={`{
  "title": "Advanced Hono Techniques",
  "content": "Learn advanced Hono patterns...",
  "author": "John Doe"
}`}
                  response={`{
  "id": 1,
  "title": "Advanced Hono Techniques",
  "content": "Learn advanced Hono patterns...",
  "author": "John Doe"
}`}
                />
                <EndpointCard
                  method="DELETE"
                  path="/posts/:id"
                  description="Delete a post"
                  methodColor="bg-red-600"
                  response={`{
  "id": 1,
  "title": "Getting Started with Hono",
  "content": "Hono is a fast web framework...",
  "author": "John Doe"
}`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Getting Started</h2>
            <p className="text-slate-600 text-lg">Quick start guide to using the API</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Start the Server
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Clone the repository and start the development server:</p>
                <CodeBlock
                  code={`npm install
npm run dev

# Server will start on http://localhost:8787`}
                  id="start-server"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Make Your First Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Test the API with a simple GET request:</p>
                <CodeBlock
                  code={`curl http://localhost:8787/products

# Or using fetch in JavaScript
fetch('http://localhost:8787/products')
  .then(response => response.json())
  .then(data => console.log(data));`}
                  id="first-request"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Create New Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Add new data using POST requests:</p>
                <CodeBlock
                  code={`fetch('http://localhost:8787/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'New Product',
    price: 49.99,
    description: 'A great new product'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
                  id="create-resource"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-bold">Hono API ️‍🔥</h3>
              </div>
              <p className="text-slate-400">
                A modern, fast, and lightweight REST API built with Hono.js  for all your development needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Issues & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contributing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">API Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Version: 1.0.0</li>
                <li>Framework: Hono.js</li>
                <li>Runtime: Node.js</li>
                <li>Port: 8787</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Hono API Documentation. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
