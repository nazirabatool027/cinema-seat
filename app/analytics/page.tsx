"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-[#F59630] mb-6"
      >
        Analytics Dashboard
      </motion.h1>

      {/* Top Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Total Users"
          value="12,480"
          icon={<Users className="text-blue-600" size={26} />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$8,240"
          icon={<DollarSign className="text-green-600" size={26} />}
        />
        <StatCard
          title="Growth Rate"
          value="+18%"
          icon={<TrendingUp className="text-orange-600" size={26} />}
        />
      </div>

      {/* Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow-md mb-10"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <BarChart3 className="text-purple-600" /> Sales Overview
        </h2>

        {/* Dummy Chart Box */}
        <div className="h-64 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500">
          📊 Chart Coming Soon...
        </div>
      </motion.div>

      {/* Recent Activity Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Activity className="text-red-600" /> Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center justify-between border-b pb-2">
            <span>New user registered</span>
            <span className="text-sm text-gray-400">2 min ago</span>
          </li>

          <li className="flex items-center justify-between border-b pb-2">
            <span>Payment received from client</span>
            <span className="text-sm text-gray-400">30 min ago</span>
          </li>

          <li className="flex items-center justify-between border-b pb-2">
            <span>Analytics report generated</span>
            <span className="text-sm text-gray-400">1 hr ago</span>
          </li>

          <li className="flex items-center justify-between">
            <span>New order placed</span>
            <span className="text-sm text-gray-400">3 hrs ago</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

/* =============== Reusable Stat Card Component =============== */
const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4"
    >
      <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>

      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </motion.div>
  );
};
