"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from '@/components/ui/command';
import { PlusCircle, Heart, MessageCircle, Eye, Search, Bell, Settings, LogOut, TrendingUp, MapPin, Home, Diamond, Tag, Users, ShoppingBag, Calendar, MoreHorizontal, Share2, Bookmark, Flag, Edit, Trash2, Camera, Video, Paperclip, Smile, Send, ChevronDown, ChevronUp, ArrowUp, ArrowDown, Star, DollarSign, Gift, Zap, Award, ThumbsUp, ThumbsDown, Globe, Lock, Mail, Phone, Info, HelpCircle, AlertCircle, CheckCircle, X, Check, Plus } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/header';
import DashboardComponent from '@/components/card';
import { cn } from '@/lib/utils';
import ListingsTab from '@/components/Listingstab';
import Navigation from '@/components/Sidenav';

// Mocked data
const mockUsers = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
  avatar: `/avatars/user${i + 1}.jpg`,
  isOnline: Math.random() > 0.5,
}));

const friends = [
  { name: "Alex", avatar: "/avatars/alex.jpg" },
  { name: "Sam", avatar: "/avatars/sam.jpg" },
  { name: "Jordan", avatar: "/avatars/jordan.jpg" },
  // ... more friends
];
const mockListings = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  image: `/listings/product${i + 1}.jpg`,
  price: `$${Math.floor(Math.random() * 1000)}`,
  location: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][Math.floor(Math.random() * 5)],
}));

const mockPosts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  user: mockUsers[Math.floor(Math.random() * mockUsers.length)],
  content: `This is a sample post ${i + 1}. #Noun #SocialMedia`,
  images: Array.from({ length: Math.floor(Math.random() * 4) }, (_, j) => `/posts/image${j + 1}.jpg`),
  hashtags: ['#Noun', '#SocialMedia', '#TrendingNow', '#Connect'][Math.floor(Math.random() * 4)],
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 100),
  views: Math.floor(Math.random() * 10000),
  timeAgo: `${Math.floor(Math.random() * 24)}h ago`,
}));

const mockTrending = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  tag: `#Trending${i + 1}`,
  count: Math.floor(Math.random() * 10000),
}));

const mockCategories = [
  { id: 1, name: 'Electronics', icon: 'laptop' },
  { id: 2, name: 'Fashion', icon: 'shirt' },
  { id: 3, name: 'Home & Garden', icon: 'home' },
  { id: 4, name: 'Sports', icon: 'activity' },
  { id: 5, name: 'Beauty', icon: 'sparkles' },
];

const mockNotifications = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  type: ['like', 'comment', 'mention', 'follow'][Math.floor(Math.random() * 4)],
  user: mockUsers[Math.floor(Math.random() * mockUsers.length)],
  content: `Notification ${i + 1} content`,
  timeAgo: `${Math.floor(Math.random() * 60)}m ago`,
}));

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [posts, setPosts] = useState(mockPosts);
  const [darkMode, setDarkMode] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (inView) {
      // Load more posts when the user scrolls to the bottom
      setPosts((prevPosts) => [...prevPosts, ...mockPosts.slice(0, 10)]);
    }
  }, [inView]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCreatePost = (content: string) => {
    const newPost = {
      id: posts.length + 1,
      user: mockUsers[0], // Assume the current user is the first in the mockUsers array
      content,
      images: [],
      hashtags: [],
      likes: 0,
      comments: 0,
      views: 0,
      timeAgo: 'Just now',
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const NavItem: React.FC<{ icon: React.ReactNode; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={`w-full justify-start ${active ? 'bg-purple-900 text-white' : ''}`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
    <div className="bg-[#222222] text-gray-100 min-h-screen">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsCommandOpen={setIsCommandOpen}
        mockUsers={mockUsers}
        mockPosts={mockPosts}
      />

        <main className="container mx-auto px-4 py-8 flex">
          <nav className="w-64 mr-8">
          <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mockTrending={mockTrending} 
      />
          </nav>

          <div className="flex-1">
            <Card className="bg-[#1c1c1c] border-none mb-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/avatars/user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Input
                    placeholder="What's on your mind, John?"
                    className="flex-1 bg-gray-700"
                    onClick={() => setIsDialogOpen(true)}
                  />
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" className="flex-1">
                    <Camera className="w-5 h-5 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" className="flex-1">
                    <Video className="w-5 h-5 mr-2" />
                    Video
                  </Button>
                  <Button variant="ghost" className="flex-1">
                    <Paperclip className="w-5 h-5 mr-2" />
                    Attachment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="sm:max-w-[425px] bg-[#1c1c1c] text-gray-100">
                <DialogHeader>
                  <DialogTitle>Create a Post</DialogTitle>
                  <DialogDescription>
                    Share your thoughts with the Noun community.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="post-content" className="text-right">
                      Content
                    </Label>
                    <textarea
                      id="post-content"
                      className="col-span-3 bg-gray-700 border-gray-600"
                      rows={4}
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="post-image" className="text-right">
                      Image
                    </Label>
                    <Input id="post-image" type="file" className="col-span-3 bg-gray-700 border-gray-600" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={() => setIsDialogOpen(false)}>Post</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-[#1c1c1c] shadow-sm border-none mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={post.user.avatar} alt={post.user.name} />
                          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-sm font-medium">{post.user.name}</CardTitle>
                          <CardDescription className="text-xs">{post.timeAgo}</CardDescription>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
                          <DropdownMenuItem>
                            <Bookmark className="w-4 h-4 mr-2" />
                            Save Post
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Flag className="w-4 h-4 mr-2" />
                            Report
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
  <p className="text-sm mb-4">{post.content}</p>
  {post.images && post.images.length > 0 && (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {post.images.map((image, index) => (
        <Image key={index} src={image} alt={`Post image ${index + 1}`} width={300} height={200} objectFit="cover" className="rounded-md" />
      ))}
    </div>
  )}
  {Array.isArray(post.hashtags) && post.hashtags.length > 0 && (
    <div className="flex flex-wrap space-x-2 mb-4">
      {post.hashtags.map((tag, index) => (
        <Badge key={index} variant="secondary" className="text-purple-400 bg-purple-900 hover:bg-purple-800 cursor-pointer mb-2">
          {tag}
        </Badge>
      ))}
    </div>
  )}
</CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)}>
                      <Heart className={`w-4 h-4 mr-1 ${post.likes > 0 ? 'text-red-500 fill-red-500' : ''}`} />
                      {post.likes} Likes
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments} Comments
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views} Views
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
            <div ref={ref} style={{ height: '10px' }} />
          </div>

          <aside className="w-80 ml-8">
          <DashboardComponent
  diamonds={1250}
  trendingTopic="NounChallenge"
  dailyChallenge="Post a photo of your favorite book"
  streakCount={7}
  friendsOnline={12}
  />
  
          <ListingsTab listings={mockListings}/>



            <Card className="bg-[#1c1c1c] border-none">
              <CardHeader>
                <CardTitle>Explore Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {mockCategories.map((category) => (
                    <Button key={category.id} variant="outline" className="justify-start">
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </main>

        <footer className="bg-gray-800 border-t border-gray-700 mt-12">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">About Noun</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">Community</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Forum</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Events</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">Help & Support</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Safety Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-300">Legal</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-purple-400">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>&copy; 2024 Noun, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.button
              className="w-[50px] h-[50px] rounded-[5px] shadow-lg bg-[#9999F8] hover:bg-[#8080F7] flex items-center justify-center focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-6 h-6 text-white" />
            </motion.button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700" align="end">
            <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Create Listing
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              New Message
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
              <Users className="w-4 h-4 mr-2" />
              Create Group
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
              <Calendar className="w-4 h-4 mr-2" />
              Create Event
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Create New Post</span>
            </CommandItem>
            <CommandItem>
              <MessageCircle className="mr-2 h-4 w-4" />
              <span>New Message</span>
            </CommandItem>
            <CommandItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigate">
            <CommandItem>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem>
              <ShoppingBag className="mr-2 h-4 w-4" />
              <span>Marketplace</span>
            </CommandItem>
            <CommandItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Groups</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

        <Dialog>
          <DialogTrigger asChild>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Customize your Noun experience. Changes are saved automatically.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Notification Preferences</Label>
                <ToggleGroup type="multiple">
                  <ToggleGroupItem value="likes">Likes</ToggleGroupItem>
                  <ToggleGroupItem value="comments">Comments</ToggleGroupItem>
                  <ToggleGroupItem value="mentions">Mentions</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Language</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

// Additional components

const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentPropsWithoutRef<"select">
>(({ className, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Select.displayName = "Select";

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </button>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("block truncate", className)}
    {...props}
  />
));
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-700 bg-gray-800 text-gray-100 shadow-md animate-in fade-in-80",
      className
    )}
    {...props}
  >
    <div className="p-1">{children}</div>
  </div>
));
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { value: string }
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-gray-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Check className="h-4 w-4" />
    </span>
    <span className="pl-8">{children}</span>
  </div>
));
SelectItem.displayName = "SelectItem";

export default HomePage;