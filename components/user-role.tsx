"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck } from "lucide-react";

export default function UserTypeSelector() {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: "member",
      title: "Group Member",
      description: "Join and participate in group activities",
      icon: Users,
    },
    {
      id: "admin",
      title: "Admin",
      description: "Manage users, settings, and permissions",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          Select Your Role
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = selected === option.id;

            return (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(option.id)}
              >
                <Card
                  className={`cursor-pointer border-2 transition-all rounded-2xl shadow-sm ${
                    isActive
                      ? "border-black bg-white"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        isActive ? "bg-black text-white" : "bg-gray-100"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h2 className="text-lg font-medium">
                        {option.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {option.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Button
          className="w-full rounded-xl"
          disabled={!selected}
          onClick={() => alert(`Selected: ${selected}`)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
