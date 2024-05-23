/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iP2dLXmC3Ya
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">CashBidPrices.com</h1>
          {/* <nav className="hidden md:flex items-center space-x-4">
            <a className="hover:text-gray-300" href="#">
              Home
            </a>
            <a className="hover:text-gray-300" href="#">
              About
            </a>
            <a className="hover:text-gray-300" href="#">
              Contact
            </a>
          </nav>
          <Button className="md:hidden" variant="primary">
            Menu
          </Button> */}
        </div>
      </header>
      <main className="flex-1 bg-gray-100 py-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Find Grain Bid Prices</h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <Label htmlFor="location">Location</Label>
              <Input
                className="w-full"
                id="location"
                placeholder="Enter your address"
                type="text"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="grain">Grain Type</Label>
              <Select>
                <SelectTrigger id="grain" className="w-[180px]">
                  <SelectValue placeholder="Select grain type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corn">Corn</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="soybeans">Soybeans</SelectItem>
                  <SelectItem value="oats">Oats</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="default">Search</Button>
            </div>
          </form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h3 className="text-2xl font-bold mb-4">Results</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Bid Price</TableHead>
                  <TableHead>Transportation Cost</TableHead>
                  <TableHead>Total Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Anytown, USA</TableCell>
                  <TableCell>$4.50/bu</TableCell>
                  <TableCell>$0.25/bu</TableCell>
                  <TableCell>$4.75/bu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Smallville, USA</TableCell>
                  <TableCell>$4.75/bu</TableCell>
                  <TableCell>$0.20/bu</TableCell>
                  <TableCell>$4.95/bu</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bigcity, USA</TableCell>
                  <TableCell>$4.80/bu</TableCell>
                  <TableCell>$0.30/bu</TableCell>
                  <TableCell>$5.10/bu</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
          © {new Date().getFullYear()} Grain Bid Prices. All rights reserved.
          CashBidPrices.com
        </div>
      </footer>
    </div>
  );
}
