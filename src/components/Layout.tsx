// src/Layout.tsx (FIXED VERSION)
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Plus, Wallet, Calculator, Atom, Laptop, TestTube, Dna, Settings, Heart, Users } from "lucide-react";
import { academicCategories } from "@/data/mockData";
import AnswerChainIcon from "./AnswerChainIcon";

// FIXED: Import WalletConnectButton properly
import WalletConnectButton from "./WalletConnectButton";

const iconMap = { Calculator, Atom, Laptop, TestTube, Dna, Settings, Heart, Users };

const menuItems = [
  { title: "Home", url: "/home", icon: Home },
  { title: "Ask Question", url: "/ask", icon: Plus },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-2 py-2">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors tracking-tight">
            <AnswerChainIcon className="w-8 h-8" />
            AnswerChain
          </Link>
          <p className="text-sm text-muted-foreground mt-1 ml-10">Ask. Answer. Verify.</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Academic Fields</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {academicCategories.slice(0, 6).map((category) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                return (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton asChild>
                      <Link to={`/home?category=${category.id}`} className="justify-between">
                        <div className="flex items-center gap-2">
                          {IconComponent && <IconComponent className="h-4 w-4" />}
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.id === "mathematics" ? "12" : "5"}
                        </Badge>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* FIXED: Use a div instead of SidebarMenuButton asChild to avoid click conflicts */}
            <div className="p-2 w-full">
              <WalletConnectButton />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function AppHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) setIsVisible(true);
      else setIsVisible(false);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 flex h-16 items-center gap-2 border-b px-4 bg-background/95 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <AnswerChainIcon className="w-6 h-6" />
          AnswerChain
        </Link>
      </div>
      <div className="ml-auto">
        <WalletConnectButton />
      </div>
    </header>
  );
}

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}