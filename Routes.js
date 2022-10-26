// import { Analytics } from "@mui/icons-material";
import React from "react";
import AddButtonItem from "./pages/AddButtonItem";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import AddButtonfood from "./pages/AddButtonfood"
import SignIn from "./components/SignIn";
import Settings from "./components/Settings";
import Calendere from "./components/Calendere";
import Profile from "./components/Profile";
import MenuStock from "./components/MenuStock";
import Tablebooking from "./components/Tablebooking";
import KitichenOrder from "./components/KitichenOrder";
import CounterCheckout from "./components/CounterCheckout";
import CostmerOrder from "./components/CostmerOrder";
// import Dashboardgraph from "./components/Dashboardgraph";
import MenuItem from "./components/MenuItem";
import Addbutton from "./pages/Addbutton";
// import FoodCategories from "./components/FoodCategories"
import FoodItems from "./components/FoodItems";
import Edit from "./pages/Edit";
import Menucategeory from "./components/FoodCategory";
import MenuItemsCategory from "./components/MenuItemsCategory";
import EditMenuitems from "./pages/EditMenuitems";
import Timeslot from "./components/Timeslot";
import ButtonTimeSlot from "./timeslot/ButtonTimeSlot";
import EditTimeslot from "./timeslot/EditTimeslot";
import EditItems from "./pages/EditItems";
import Packages from "./components/Packages";
import EditPackages from "./packages/EditPackages";
import AddPackages from "./packages/AddPackages";
import Viewdetailpackages from "./packages/Viewdetailpackages";
import Todaymenu from "./components/Todaymenu";
import AddToday from "./todaymenu/AddToday";
import EditToday from "./todaymenu/EditToday";
import ViewToday from "./todaymenu/ViewToday";
import Dashboardgraph from "./components/Dashboardgraph";
import StaffDetail from "./components/StaffDetail";
import AddStaffdetails from "./staffdetail/AddStaffdetails";

function Routes1() {
  return (
    <>
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route path='/dashboard' element={<Dashboardgraph />}></Route>
            <Route path='/analytics' element={< Analytics />}></Route>
            <Route path='/' element={< SignIn />}></Route>
            <Route path='/setting' element={<Settings />}></Route>
            <Route path='/calendere' element={<Calendere />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/menustock' element={<MenuStock />}></Route>
            <Route path='/tablebooking' element={<Tablebooking />}></Route>
            <Route path='/kitichenorder' element={<KitichenOrder />}></Route>
            <Route path='/countercheckout' element={<CounterCheckout />}></Route>
            <Route path='/costmerorder' element={<CostmerOrder />}></Route>
            <Route path='/menuitems' element={<MenuItem />}></Route>
            <Route path='/menuitems/add' element={<Addbutton />}></Route>
            <Route path='/fooditems/add' element={<AddButtonfood />}></Route>
            <Route path='/menuitemscategeory/add' element={<AddButtonItem />}></Route>
            {/* <Route path='/menucategeory' element={<MenuCategeory/>}></Route> */}
            <Route path='/fooditems' element={<FoodItems />}></Route>
            {/* <Route path='/foodcategory' element={<FoodCategoryCategories/>}></Route> */}
            <Route path='/fooditems/edit/:id/:type' element={<Edit />}></Route>
            <Route path='/editmenuitem/edit/:id/:category_name/:limit' element={<EditMenuitems />}></Route>
            <Route path='/menuitemscategeory/edit//:id/:item_name/:menu_category_id/:quantity/:menu_item_image/:price' element={<EditItems />}></Route>
            <Route path='/menuitemscategeory' element={<MenuItemsCategory />}></Route>
            <Route path='/timeslot' element={<Timeslot />}></Route>
            <Route path='/timeslot/add' element={<ButtonTimeSlot />}></Route>
            <Route path='/timeslot/Edit/:id/:from/:to/:food_type_id' element={<EditTimeslot />}></Route>
            <Route path='/timeslot' element={<Timeslot />}></Route>
            <Route path='/timeslot/add' element={<ButtonTimeSlot />}></Route>
            <Route path='/timeslot/Edit/:id/:from/:to/:food_type_id' element={<EditTimeslot />}></Route>
            <Route path='/packages' element={<Packages />}></Route>
            <Route path='/packages/edit/:id/:package_name/:food_type_id/:total_price/:discount/:price/:no_of_tiffin/:no_of_day/:limit_of_exchange/:limit_of_address_change/:limit_of_cancaled_tifin/:limit_of_time_slot_change/:menu_category_id' element={<EditPackages />}></Route>
            <Route path='/packages/add' element={<AddPackages />}></Route>
            {/* <Route path='/packages#view'element={<Viewdetailpackages/>}></Route> */}
            <Route path='/todaymenu' element={<Todaymenu />}></Route>
            <Route path='/todaymenu/edit/:id/:menu_item_id/:quantity/:mendotary/:defaultvar' element={<EditToday />}></Route>
            <Route path='/todaymenu/add' element={<AddToday />}></Route>
            <Route path='/todaymenu/view' element={<ViewToday />}></Route>

            <Route path='/staffdetails' element={<StaffDetail />}></Route>
            <Route path='/staffdetails/add' element={<AddStaffdetails />}></Route>
          </Routes>
        </Dashboard>
      </BrowserRouter>

    </>
  )
}
export default Routes1;