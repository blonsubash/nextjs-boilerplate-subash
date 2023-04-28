// import React, { useState } from "react";
// import FilterItem from "@/components/ui/filter-items.module";
// import Filter from "@/components/ui/filter.module";
// import ListItem from "@/components/ui/list-item.module";
// import List from "@/components/ui/list.module";
// import { ENTRIES_API } from "@/config/appConfig";
// import { useRouter } from "next/router";
// import Lock from "@/assets/icons/lock.svg";
// import Image from "next/image";
// import { Button } from "@/components/ui";
// import Input from "@/components/ui/input";
// import Card from "@/components/ui/card";
// import CardHeader from "@/components/ui/card-header";
// interface Entry {
//   API: string;
//   Description: string;
//   Link: string;
//   Category: string;
//   Auth: string;
// }
// interface HomeProps {
//   entries: [Entry];
//   categories: [string];
// }

// export default function Home(props: HomeProps) {
//   console.log("propssss", props);
//   const route = useRouter();
//   const [filterSelected, setFilterSelected] = useState<string[]>([]);

//   const handleEntryClick = (entryItem: Entry) => {
//     const newWindow = window.open(
//       entryItem.Link,
//       "_blank",
//       "noopener,noreferrer"
//     );
//     if (newWindow) newWindow.opener = null;
//   };

//   const handleFilterClick = (filterItem: string) => {
//     let newArray: string[] = filterSelected;
//     if (newArray.indexOf(filterItem) === -1) {
//       newArray.push(filterItem);
//     } else {
//       newArray = newArray.filter((item) => item !== filterItem);
//     }

//     setFilterSelected([...newArray]);
//   };

//   return (
//     // <main>
//     //   <h1>Home routes</h1>
//     //   <Button link="/home">Test</Button>
//     //   <Input
//     //     // variant="filled"
//     //     name="input"
//     //     type="text"
//     //     // value={"test here"}
//     //     // inputSize="input--large"
//     //     placeholder="subash"
//     //     // disabled={false}
//     //     inputProps={{
//     //       max: 10,
//     //       maxlength: 10,
//     //     }}
//     //   ></Input>
//     //   <hr />
//     //   <Filter>
//     //     {props.categories.map((categoryItem, categoryIndex: number) => {
//     //       return (
//     //         <FilterItem
//     //           key={categoryIndex}
//     //           handleClick={() => handleFilterClick(categoryItem)}
//     //           active={
//     //             filterSelected.indexOf(categoryItem) === -1 ? false : true
//     //           }
//     //         >
//     //           <div>{categoryItem}</div>
//     //         </FilterItem>
//     //       );
//     //     })}
//     //   </Filter>

//     //   <hr />

//     //   <List>
//     //     {props.entries
//     //       .filter((item) => {
//     //         if (filterSelected.length > 0) {
//     //           if (filterSelected.indexOf(item.Category) >= 0) {
//     //             return true;
//     //           } else {
//     //             return false;
//     //           }
//     //         } else {
//     //           return true;
//     //         }
//     //       })
//     //       .map((entryItem, entryIndex: number) => {
//     //         return (
//     //           <ListItem
//     //             key={entryIndex}
//     //             onClick={() => handleEntryClick(entryItem)}
//     //           >
//     //             <h2>{entryItem.API}</h2>
//     //             <div>{entryItem.Description}</div>
//     //             <div>{entryItem.Category}</div>
//     //             {entryItem.Auth !== "" && (
//     //               <Image src={Lock} height={20} alt={"Locked"} />
//     //             )}
//     //           </ListItem>
//     //         );
//     //       })}
//     //   </List>
//     // </main>
//     // <div>
//     //   <h2>Login page</h2>
//     //   <Card>
//     //     <CardHeader>Card Header</CardHeader>
//     //   </Card>
//     // </div>
//   );
// }

// export async function getStaticProps() {
//   const data = await fetch(ENTRIES_API);
//   const jsonData = await data.json();

//   return {
//     props: {
//       entries: jsonData.entries,
//       categories: jsonData.entries
//         .map((a: Entry) => a.Category)
//         .filter(
//           (value: string, index: number, array: [string]) =>
//             array.indexOf(value) === index
//         ),
//     },
//   };
// }

/*  ROuting Testting */

import { useRouter } from "next/router";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import PrivateRoute from "@/routes/PrivateRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";
const Dashboard = dynamic(() => import("./dashboard"));
// const Establishment = dynamic(() => import("./establishment"));
// const Data = dynamic(() => import("./data"));
// const Report = dynamic(() => import("./report"));
// const Employee = dynamic(() => import("./employee"));
// const UserManagement = dynamic(() => import("./userManagement"));
// const Profile = dynamic(() => import("./profile"));

const AdminContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path={`/`}
            element={
              <PrivateRoute layout={DashboardLayout}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AdminContainer;
