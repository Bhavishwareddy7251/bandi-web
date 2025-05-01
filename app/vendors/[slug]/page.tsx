import Layout from "@/components/vendors/Layout";
import NavigationSearch from "@/components/vendors/NavigationSearch";
import Profile from "@/components/vendors/Profile";
import Recipes from "@/components/vendors/Recipes";
import SearchNav from "@/components/vendors/SearchNav";
export default function VendorPage(){
    return <Layout>
        <Profile/>
        <SearchNav/>
        <NavigationSearch/>
        <Recipes/>
    </Layout>
}