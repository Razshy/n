import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Gift, Users } from 'lucide-react';

interface DashboardComponentProps {
  diamonds: number;
  trendingTopic: string;
  dailyChallenge: string;
  streakCount: number;
  friendsOnline: number;
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  diamonds,
  trendingTopic,
  dailyChallenge,
  streakCount,
  friendsOnline
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <Card className="bg-[#1c1c1c] border-none shadow-lg overflow-hidden">
        <CardContent className="p-4 space-y-4">
          <motion.div 
            variants={itemVariants}
            className="flex justify-between items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.06852 10.2983L10.3003 1.06818C10.9854 0.383865 11.9142 -0.000354042 12.8826 2.44797e-07H28.1164C29.0845 0.000166922 30.0129 0.384776 30.6975 1.06927L39.9304 10.2983C40.5976 10.9654 40.9806 11.8648 40.9993 12.8081C41.018 13.7513 40.6708 14.6652 40.0307 15.3582L23.1863 33.6114C22.8444 33.9821 22.4293 34.2779 21.9674 34.4802C21.5054 34.6825 21.0065 34.787 20.5022 34.787C19.9979 34.787 19.499 34.6825 19.0371 34.4802C18.5751 34.2779 18.1601 33.9821 17.8181 33.6114L0.968276 15.3598C0.328746 14.667 -0.0179672 13.7535 0.000717825 12.8108C0.0194028 11.8681 0.402037 10.9691 1.06852 10.3022V10.2983Z" fill="#9999F8"/>
              </svg>
              <span className="text-lg font-bold text-[#cdccf6]">Diamonds</span>
            </div>
            <span className="text-2xl font-bold text-[#9899f0]">{diamonds.toLocaleString()}</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-between items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2">
              <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M14 23.1667C12.9391 23.1667 11.9217 22.7452 11.1716 21.9951C10.4214 21.245 10 20.2275 10 19.1667C10 16.5 14 12.5 14 12.5C14 12.5 18 16.5 18 19.1667C18 20.2275 17.5786 21.245 16.8284 21.9951C16.0783 22.7452 15.0609 23.1667 14 23.1667Z" fill="#784BC4">
                    <animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="
                      M14 23.1667C12.9391 23.1667 11.9217 22.7452 11.1716 21.9951C10.4214 21.245 10 20.2275 10 19.1667C10 16.5 14 12.5 14 12.5C14 12.5 18 16.5 18 19.1667C18 20.2275 17.5786 21.245 16.8284 21.9951C16.0783 22.7452 15.0609 23.1667 14 23.1667Z;
                      M14 23.1667C12.9391 23.1667 11.9217 22.7452 11.1716 21.9951C10.4214 21.245 9.5 20.2275 9.5 19.1667C9.5 16.5 14 11.5 14 11.5C14 11.5 18.5 16.5 18.5 19.1667C18.5 20.2275 17.5786 21.245 16.8284 21.9951C16.0783 22.7452 15.0609 23.1667 14 23.1667Z;
                      M14 23.1667C12.9391 23.1667 11.9217 22.7452 11.1716 21.9951C10.4214 21.245 10 20.2275 10 19.1667C10 16.5 14 12.5 14 12.5C14 12.5 18 16.5 18 19.1667C18 20.2275 17.5786 21.245 16.8284 21.9951C16.0783 22.7452 15.0609 23.1667 14 23.1667Z"
                    />
                  </path>
                  <path d="M26.039 16.588C25.9162 14.655 25.2241 12.8015 24.05 11.261C23.611 10.702 23.141 10.168 22.688 9.62C22.094 8.91333 21.5006 8.20667 20.908 7.5C20.8415 7.4288 20.7608 7.37241 20.6711 7.33451C20.5814 7.29661 20.4847 7.27804 20.3873 7.28002C20.2899 7.282 20.194 7.30449 20.1059 7.34601C20.0178 7.38753 19.9395 7.44716 19.876 7.521L19.299 8.209L17.569 10.273C17.5073 10.3502 17.4248 10.4083 17.3313 10.4404C17.2379 10.4725 17.1371 10.4774 17.041 10.4544C16.9448 10.4315 16.8572 10.3816 16.7883 10.3107C16.7194 10.2398 16.6722 10.1508 16.652 10.054C16.43 9.13333 16.208 8.21233 15.986 7.291C15.4406 5.03033 14.8953 2.77233 14.35 0.517C14.3269 0.42857 14.2865 0.345613 14.2311 0.272957C14.1756 0.200302 14.1063 0.1394 14.0271 0.0937984C13.9479 0.0481969 13.8604 0.0188065 13.7697 0.00733846C13.6791 -0.00412954 13.587 0.00255402 13.499 0.027C13.303 0.0977008 13.1362 0.231781 13.025 0.408C10.2396 3.73 7.45365 7.05167 4.66698 10.373C4.35498 10.749 4.02998 11.115 3.74998 11.516C2.56852 13.1801 1.93547 15.1712 1.93898 17.212C1.93898 17.356 1.93898 17.499 1.94798 17.643C1.97185 18.9551 2.26265 20.2486 2.80266 21.4447C3.34267 22.6408 4.12058 23.7143 5.08898 24.6C5.38291 24.8784 5.69134 25.1411 6.01298 25.387C7.61313 26.5965 9.47523 27.4128 11.449 27.77C13.1365 28.0834 14.8674 28.0834 16.555 27.77C18.5359 27.4103 20.4039 26.588 22.007 25.37C22.3247 25.1261 22.6294 24.8657 22.92 24.59C23.8939 23.6978 24.6744 22.6152 25.2133 21.4093C25.7522 20.2034 26.038 18.8998 26.053 17.579C26.053 17.579 26.053 17.572 26.053 17.569C26.0645 17.2433 26.0591 16.9172 26.037 16.592" fill="#9275DB" opacity="0.5">
                    <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.5;0.7;0.5" />
                  </path>
                </g>
              </svg>
              <span className="text-sm font-medium text-[#cdccf6]">Streak</span>
            </div>
            <span className="text-[#ffd700] font-bold">{streakCount} days</span>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-5 w-5 text-[#cdccf6]" />
              <span className="text-sm font-medium text-[#cdccf6]">Trending Now</span>
            </div>
            <p className="text-sm text-[#9899f0]">#{trendingTopic}</p>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                variants={expandVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                <motion.div 
                  variants={itemVariants}
                  className="pt-2 border-t border-[#2b2b2a]"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Gift className="h-5 w-5 text-[#cdccf6]" />
                    <span className="text-sm font-medium text-[#cdccf6]">Daily Challenge</span>
                  </div>
                  <p className="text-sm text-[#9899f0]">{dailyChallenge}</p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="pt-2 border-t border-[#2b2b2a] mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#cdccf6]" />
                    <span className="text-sm font-medium text-[#cdccf6]">{friendsOnline} friends online</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="w-full bg-[#cdccf6] text-[#1c1c1c] hover:bg-[#9899f0] transition-all duration-300 transform hover:shadow-lg"
            >
              Explore Noun
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardComponent;