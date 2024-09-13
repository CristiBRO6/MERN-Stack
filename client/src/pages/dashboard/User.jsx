
import { useParams } from "react-router-dom";

import PageMeta from "../../components/PageMeta";
import useResponsive from "../../hooks/useResponsive";

import { Card, CardBody, CardHeader, CardTitle } from "../../components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/Avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { Mail, Phone } from "lucide-react";


const User = () => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);
  const { userId } = useParams();

  return (
    <>
      <PageMeta title={`User - ${userId}`} description={`User - ${userId}`} />

      <div className="flex flex-col md:flex-row gap-2">
        <Card width={screenSizeIndex === 0 ? "100%" : "280px"}>
          <CardHeader>
            <CardTitle className="text-left">Profile</CardTitle>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="w-full flex flex-col items-center gap-2 pb-2 border-b">
              <Avatar className="size-20">
                <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-semibold leading-none">CristiBRO</span>
                <span className="text-sm text-gray-500 leading-none">Web Developer</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold">Contact</span>
              <div className="flex items-center gap-2 text-gray-800">
                <Mail className="size-4" />
                <span className="text-sm">Email: john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <Phone className="size-4" />
                <span className="text-sm">Phone: (123) 456-7890</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold">Delivery address</span>
              {/* DELIVERY CONTENT */}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold">Billing Address</span>
              {/* BILLING CONTENT */}
            </div>
          </CardBody>
        </Card>

        <Card width="100%" className="w-full">
          <CardHeader>
            <CardTitle className="text-left">Overview</CardTitle>
          </CardHeader>
          <CardBody>
            <Tabs defaultValue="orders">
              <TabsList>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="moderate">Moderate</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>
              <TabsContent value="orders">Orders content here</TabsContent>
              <TabsContent value="moderate">Moderate content here</TabsContent>
              <TabsContent value="settings">Settings content here</TabsContent>
              <TabsContent value="profile">Profile content here</TabsContent>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
    
export default User;
      