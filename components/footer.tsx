"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">AI Summit</h3>
            <p className="text-foreground/80 mb-4 max-w-md">
              Join us for the premier AI conference in Austin, Texas. Connect with industry
              leaders and stay ahead of the curve in artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-foreground/80">
                <MapPin className="w-4 h-4 mr-2" />
                Austin Convention Center
              </div>
              <div className="flex items-center text-foreground/80">
                <Mail className="w-4 h-4 mr-2" />
                info@aisummit.com
              </div>
              <div className="flex items-center text-foreground/80">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-foreground/80 mb-4">
              Stay updated with the latest AI news and conference updates.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-foreground/80">
          <p>&copy; 2025 Austin AI Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}