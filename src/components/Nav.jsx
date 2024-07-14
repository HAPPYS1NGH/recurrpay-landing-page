import Link from "next/link";
// import { Search } from "./ui/search";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ModeToggle";

export function MainNav({
  className,
  ...props
}) {
  return (
    <div
      className={cn("flex flex-1 items-center justify-between", className)}
      {...props}
    >
      {/* <Search /> */}
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/examples/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </Link>
        <Link
          href="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Customers
        </Link>
        <Link
          href="/organization-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Organization
        </Link>
        <Link
          href="/user-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Employee
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
