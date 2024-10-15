import React, { useState, useEffect } from 'react';import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Search, Bell, FileText, Hash, TrendingUp, MessageCircle, ChevronDown, Users, Settings, Diamond, HelpCircle, LogOut } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsCommandOpen: (isOpen: boolean) => void
  mockUsers: any[]; // Replace 'any' with the correct type
  mockPosts: any[]; // Replace 'any' with the correct type
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  mockUsers,
  mockPosts
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [trendingSearches, setTrendingSearches] = useState(['#NounChallenge', 'New Features', 'Community Guidelines']);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTrendingSearches(prev => {
        const newTrend = `Trend ${Math.floor(Math.random() * 100)}`;
        return [newTrend, ...prev.slice(0, 2)];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-[#2B2A2B] border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg id="Group_1286" data-name="Group 1286" xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 453 114.508" className="fill-purple-500">
          <path id="Path_6878" d="M112.991.42C78.5.42,56.14,22.195,56.14,57.211,56.14,94.642,79.2,114,112.991,114s57.093-19.42,57.093-56.851c0-35.037-22.6-56.731-57.093-56.731Zm.241,87.964v-.04c-12.3,0-20.949-6.017-24.934-19.279a41.752,41.752,0,0,1,0-23.928c3.985-13.222,12.6-19.219,24.652-19.219v.04c14.127,0,23.465,8.01,26.363,25.739a42.919,42.919,0,0,1,0,11.129c-2.958,17.649-12.236,25.578-26.1,25.578h0Z" transform="translate(56.838 0.425)" fill="#fff"/>
  <g id="Group_1285" data-name="Group 1285">
    <path id="Path_6930" data-name="Path 6930" d="M12.18,16.681a12.062,12.062,0,0,0,1.57-1.791,12.4,12.4,0,0,1-1.107,1.389c-.161.161-.3.282-.443.423Z" transform="translate(12.332 15.075)" />
    <path id="Path_6931" data-name="Path 6931" d="M13.342,14.56c-.121.2-.241.4-.362.584C13.1,14.942,13.242,14.761,13.342,14.56Z" transform="translate(13.141 14.741)" />
    <path id="Path_6932" data-name="Path 6932" d="M73.816,43.851v67.2h28.436V35.278a44.06,44.06,0,0,0-1.127-10,33.637,33.637,0,0,0-2.858-7.808C92.27,5.9,79.954,0,64.458,0S33.728,6.983,30.026,17.468a20.826,20.826,0,0,0-.926,3.985h0a22.631,22.631,0,0,1-2.616,7.828c-.121.2-.241.4-.362.584,0,.02-.04.04-.06.08a8.878,8.878,0,0,1-1.57,1.791,1.15,1.15,0,0,0-.161.141,10.472,10.472,0,1,1-6.923-18.333h5.735a4.724,4.724,0,0,0,4.729-4.729V3.461H0V6.48H0V111.026H28.436V55.02C28.436,36.908,40.591,26.4,55.3,26.4c10.907,0,18.514,5.816,18.514,17.428Z" fill="#fff"/>
    <path id="Path_6933" data-name="Path 6933" d="M12.1,15.921a1.511,1.511,0,0,1,.161-.141C12.2,15.82,12.16,15.881,12.1,15.921Z" transform="translate(12.251 15.976)"/>
    <path id="Path_6934" data-name="Path 6934" d="M13.01,14.85a.376.376,0,0,0-.06.08C12.95,14.91,12.99,14.89,13.01,14.85Z" transform="translate(13.111 15.035)"/>
  </g>
  <path id="Path_6935" data-name="Path 6935" d="M157.55,41.13a12.063,12.063,0,0,0-1.57,1.791,12.405,12.405,0,0,1,1.107-1.389c.161-.161.3-.282.443-.423h0Z" transform="translate(157.92 41.621)" fill="none"/>
  <path id="Path_6936" data-name="Path 6936" d="M155.78,42.644c.121-.2.241-.4.362-.584C156.021,42.261,155.881,42.442,155.78,42.644Z" transform="translate(157.718 42.583)" fill="none"/>
  <path id="Path_6937" data-name="Path 6937" d="M146.566,68.915V1.72H118.13V77.488a44.061,44.061,0,0,0,1.127,10,33.637,33.637,0,0,0,2.858,7.808c6,11.572,18.313,17.468,33.809,17.468s30.73-6.983,34.433-17.468a20.828,20.828,0,0,0,.926-3.985h0a22.631,22.631,0,0,1,2.616-7.828c.121-.2.241-.4.362-.584,0-.02.04-.04.06-.081a8.877,8.877,0,0,1,1.57-1.791,1.149,1.149,0,0,0,.161-.141,10.472,10.472,0,1,1,6.923,18.333h-5.735a4.724,4.724,0,0,0-4.729,4.729V109.3h27.872v-3.019h0V1.74H191.946V57.746c0,18.112-12.155,28.617-26.866,28.617-10.907,0-18.514-5.816-18.514-17.428h0Z" transform="translate(119.599 1.741)" fill="#fff"/>
  <path id="Path_6938" data-name="Path 6938" d="M156.921,41.05a1.51,1.51,0,0,1-.161.141C156.82,41.151,156.861,41.09,156.921,41.05Z" transform="translate(158.71 41.561)" />
  <path id="Path_6939" data-name="Path 6939" d="M155.96,42.09a.376.376,0,0,0,.06-.08C156.02,42.03,155.98,42.05,155.96,42.09Z" transform="translate(157.9 42.533)" />
  <path id="Path_6940" data-name="Path 6940" d="M248.106,43.851v67.2h28.436V35.278a44.06,44.06,0,0,0-1.127-10,33.635,33.635,0,0,0-2.858-7.808C266.56,5.9,254.244,0,238.748,0s-30.73,6.983-34.433,17.468a20.825,20.825,0,0,0-.926,3.985h0a22.631,22.631,0,0,1-2.616,7.828c-.121.2-.241.4-.362.584a.375.375,0,0,0-.06.08,8.878,8.878,0,0,1-1.57,1.791,1.151,1.151,0,0,0-.161.141A10.472,10.472,0,1,1,191.7,13.544h5.735a4.724,4.724,0,0,0,4.729-4.729V3.461H174.29V6.48h0V111.046h28.436V55.04c0-18.112,12.155-28.617,26.866-28.617,10.907,0,18.514,5.816,18.514,17.428h0Z" transform="translate(176.458 0)" fill="#fff"/>
</svg>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="text-gray-300 hover:text-gray-400 bg-transparent hover:bg-transparent focus:outline-none">
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#1c1c1c] border-none">
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">All Content</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">Posts</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">People</DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">Communities</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-grow mx-4 max-w-2xl">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search Noun"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
          className="bg-[#1c1c1c] border-none text-gray-200 rounded-full pl-10 pr-4 py-2 w-full transition-all duration-300 focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-3 top-2 text-gray-400" />
        <AnimatePresence>
          {isSearchFocused && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 w-full z-10"
            >
              <Card className="bg-[#1c1c1c] border-none shadow-lg">
                <CardContent className="p-0">
                  <ScrollArea className="h-96">
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Trending Searches
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {trendingSearches.map((trend, index) => (
                            <Badge key={index} className="cursor-pointer bg-[#2B2A2B] hover:bg-[#323132] text-gray-400">
                              {trend}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        {searchQuery && (
                          <>
                            <div className="space-y-2">
                              {mockUsers.slice(0, 3).map((user) => (
                                <div key={user.id} className="flex items-center p-2 hover:bg-[#252425] rounded-md cursor-pointer">
                                  <Avatar className="w-8 h-8 mr-2">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <span className="text-gray-200 text-sm font-medium">{user.name}</span>
                                    <p className="text-gray-400 text-xs">@{user.username}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="space-y-2">
                              {mockPosts.slice(0, 3).map((post) => (
                                <div key={post.id} className="p-2 hover:bg-[#252425] rounded-md cursor-pointer">
                                  <p className="text-sm text-gray-200 truncate">{post.content}</p>
                                  <p className="text-xs text-gray-400 mt-1">{post.author} • {post.timestamp}</p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        {!searchQuery && (
                          <div className="text-center text-gray-400 py-4">
                            Start typing to search Noun
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>

        <div className="flex items-center space-x-2">

                <Button variant="ghost" size="icon" className="text-gray-300 hover:bg-[#313031] relative">
                  <Bell className="w-5 h-5" />
                  {notificationCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </Button>




                <Button variant="ghost" size="icon" className="text-gray-300 hover:bg-[#313031]">
                  <MessageCircle className="w-5 h-5" />
                </Button>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full text-white bg-transparent">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/avatars/user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
              <DropdownMenuLabel className="text-gray-200">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
                <Users className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
                <Diamond className="w-4 h-4 mr-2" />
                Diamonds: 10
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-200 hover:bg-gray-700">
                <LogOut className="w-4 h-4 mr-2" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;