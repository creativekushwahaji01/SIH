import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from './components/ui/dropdown-menu'; // Adjust import path as needed
import { Button } from './components/ui/button'; // Adjust import path as needed
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card'; // Adjust import path as needed
import { Label } from './components/ui/label'; // Adjust import path as needed
import { Input } from './components/ui/input'; // Adjust import path as needed
import { Textarea } from './components/ui/textarea'; // Adjust import path as needed
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';

export function Coalvprototype() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="#" className="flex items-center gap-2 font-semibold">
            <CoinsIcon className="h-6 w-6" />
            <span>Carbon Neutral Mines</span>
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <BellIcon className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">New Emissions Report</p>
                    <p className="text-sm text-muted-foreground">Your latest emissions report is ready to view.</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Emissions Reduction Tip</p>
                    <p className="text-sm text-muted-foreground">
                      Check out our latest recommendation to reduce your carbon footprint.
                    </p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <img
                    src="/placeholder.svg"
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Logged in as John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Emissions</CardTitle>
                <CardDescription>Metric tons of CO2 equivalent</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emissions by Source</CardTitle>
                <CardDescription>Breakdown of emissions by source</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emissions Intensity</CardTitle>
                <CardDescription>Emissions per unit of production</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Carbon Accounting</CardTitle>
                <CardDescription>Track and manage your emissions data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="scope1">Scope 1 Emissions</Label>
                      <Input id="scope1" type="number" placeholder="Enter Scope 1 emissions" className="w-full" />
                    </div>
                    <div>
                      <Label htmlFor="scope2">Scope 2 Emissions</Label>
                      <Input id="scope2" type="number" placeholder="Enter Scope 2 emissions" className="w-full" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="scope3">Scope 3 Emissions</Label>
                      <Input id="scope3" type="number" placeholder="Enter Scope 3 emissions" className="w-full" />
                    </div>
                    <div>
                      <Label htmlFor="production">Production</Label>
                      <Input id="production" type="number" placeholder="Enter production volume" className="w-full" />
                    </div>
                  </div>
                  <Button className="w-full">Update Emissions</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emissions Reduction Strategies</CardTitle>
                <CardDescription>Explore ways to reduce your carbon footprint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Energy Efficiency</h3>
                    <p className="text-muted-foreground">
                      Implement energy-efficient technologies and practices to reduce energy consumption.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Learn More
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Renewable Energy</h3>
                    <p className="text-muted-foreground">
                      Invest in renewable energy sources to power your operations.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Learn More
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Carbon Offsets</h3>
                    <p className="text-muted-foreground">
                      Explore carbon offset programs to neutralize your remaining emissions.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity-wise Carbon Emissions</CardTitle>
                <CardDescription>Quantify carbon emissions from various mining activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="excavation">Excavation</Label>
                      <Input
                        id="excavation"
                        type="number"
                        placeholder="Enter emissions from excavation"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="transportation">Transportation</Label>
                      <Input
                        id="transportation"
                        type="number"
                        placeholder="Enter emissions from transportation"
                        className="w-full"
                      />
                    </div>
                 
