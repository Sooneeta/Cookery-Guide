import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Search } from "./pages/Search";
import { Categorymeal } from "./pages/CategoryMeal";
import { MealDetails } from "./pages/MealDetails";
import { Area } from "./pages/Area";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { ProtectedLayout } from "./components/ProtectedLayout";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryName" element={<Categorymeal />} />
          <Route path="/area/:areaName" element={<Area />} />
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/f=a" element={<Search />}></Route>
          <Route path="/mealdetails/:mealId" element={<MealDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
