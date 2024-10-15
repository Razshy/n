import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, ShoppingBag, TrendingUp, MapPin, Users, Calendar, Hash } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <motion.button
    className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
      active ? 'bg-[#9899f0] text-[#1c1c1c]' : 'text-[#cdccf6] hover:bg-[#2b2b2a]'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    {React.cloneElement(icon as React.ReactElement, {
      className: `w-5 h-5 ${active ? 'text-[#1c1c1c]' : 'text-[#cdccf6]'}`,
    })}
    <span className="font-medium">{label}</span>
  </motion.button>
);

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  mockTrending: Array<{ id: number; tag: string; count: number }>;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, mockTrending }) => {
  return (
    <nav className="w-64 mr-8 space-y-4">
      <Card className="bg-[#1c1c1c] border-none shadow-md">
        <CardContent className="p-4 space-y-2">
          <NavItem icon={<Home />} label="Home" active={activeTab === 'Home'} onClick={() => setActiveTab('Home')} />
          <NavItem icon={<ShoppingBag />} label="Marketplace" active={activeTab === 'Marketplace'} onClick={() => setActiveTab('Marketplace')} />
          <NavItem icon={<TrendingUp />} label="Trending" active={activeTab === 'Trending'} onClick={() => setActiveTab('Trending')} />
          <NavItem icon={<MapPin />} label="Places" active={activeTab === 'Places'} onClick={() => setActiveTab('Places')} />
          <NavItem icon={<Users />} label="Groups" active={activeTab === 'Groups'} onClick={() => setActiveTab('Groups')} />
          <NavItem icon={<Calendar />} label="Events" active={activeTab === 'Events'} onClick={() => setActiveTab('Events')} />
        </CardContent>
      </Card>

      <Card className="bg-[#1c1c1c] border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#cdccf6] text-lg font-bold">Trending Tags</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {mockTrending.slice(0, 5).map((tag) => (
            <motion.div 
              key={tag.id} 
              className="flex justify-between items-center py-2 border-b border-[#2b2b2a] last:border-b-0"
              whileHover={{ x: 5 }}
            >
              <span className="text-[#dad3f8] hover:text-[#cdccf6] cursor-pointer flex items-center">
                <Hash className="w-4 h-4 mr-1" />
                {tag.tag}
              </span>
              <Badge variant="secondary" className="bg-[#9899f0] text-[#1c1c1c]">
                {tag.count}
              </Badge>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </nav>
  );
};

export default Navigation;