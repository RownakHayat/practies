/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, MenuItem, Sidebar as Sidebars } from "react-pro-sidebar";

import { useEffect, useMemo } from "react";
import { useFormSetting } from "../../common/hooks/useFormSetting";
import useLayoutStore from "@/store/fetures/zustand/layout";
import useAuthStore from "@/store/fetures/zustand/suth";
import { useAppDispatch } from "@/store/fetures/useReduxStore";
// import ListItem from "./ListItem";
// import SubListItem from "./SubListItem";
import { addAuthInformation, addUserPermissions } from "@/store/fetures/auth";
// import Cookies from 'js-cookie';

type Props = {};

const SideBar = (props: Props) => {
  const { params, editData, filterSearchText } = useFormSetting();

  const { collapse } = useLayoutStore((state: any) => state);
  const { setUser, user } = useAuthStore((state: any) => state);
  const dispatch = useAppDispatch();
  const router = useRouter();

//   const { data: listQuery } = useChatNotificationQuery({});

//   const { data: rolePermissionList } = useUserRolePermissionListQuery();

  //   const { data: userInfo, refetch } = useAuthUserQuery()

  //   const { data: userRolePermission } = useGetSingleUserRolePermissionQuery({
  //     id: userInfo?.data?.role?.id,
  //   },{
  //     skip: userInfo?.data?.role?.id == undefined
  //   }
  // )

//   const permissionList = useMemo(() => {
//     const allRoles = ('');
//     const permissions: any = [];
//     allRoles?.map((role: any) => {
//       role?.module?.map((module: any) => {
//         if (!permissions?.includes(module.name)) {
//           permissions.push(module.name);
//         }
//         if (module.sub_module) {
//           module?.sub_module?.map((subModule: any) => {
//             if (!permissions.includes(subModule.name)) {
//               permissions.push(subModule.name);
//             }
//             if (subModule.permission) {
//               subModule?.permission?.map((subModulePermission: any) => {
//                 if (!permissions.includes(subModulePermission.name)) {
//                   permissions.push(subModulePermission.name);
//                 }
//               });
//             }
//           });
//         }
//       });
//     });
//     return permissions;
//   }, []);

  const handleLogout = () => {
    // Cookies.remove("token");
    // setUser({});
    // dispatch(addAuthInformation({ user: {} }));
    router.push("/");
  };

//   useEffect(() => {
//     dispatch(addUserPermissions(permissionList));
//   }, [permissionList]);

  return (
    <>
      <div className="h-fit py-5 flex  items-center justify-center border-b flex-row gap-2 mx-2">
        <Link href={"/"}>
          <Image
            priority={true}
            src={
              collapse
                ? "/assets/images/big-screenlogo.png"
                : "/assets/images/big-screenlogo.png"
            }
            alt="Logo"
            width={collapse ? "80" : "50"}
            height="80"
          />
        </Link>
        {collapse && (
          <h2 className="text-[#080939] my-2"></h2>
        )}
      </div>
      <div className=" relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <Sidebars
          width={`${collapse ? "300" : "20"}`}
          style={{ height: "calc(100vh - 140px)" }}
        >
          <Menu
            style={{
              marginLeft: ".5rem",
              marginRight: ".5rem",
            }}
          >
            {/* {permissionList?.includes("home") && ( */}
              <MenuItem>
                Home
              </MenuItem>
            {/* )} */}
            {/* {permissionList?.includes("master_configuration") && (
              <SubListItem
                dataSource={{
                  name: "Master Configuration",
                  icon: <Icons.config className="text-white " />,
                  color: "#7367F0",
                  path: "/admin/master-configuration",
                  child: [
                    {
                      name: "User Type",
                      path: "/admin/master-configuration/user-type",
                      key: "user_type",
                    },
                    {
                      name: "Office Name",
                      path: "/admin/master-configuration/office-name",
                      key: "office_name",
                    },
                    {
                      name: "Designation",
                      path: "/admin/master-configuration/designation",
                      key: "designation",
                    },
                    {
                      name: "Document type",
                      path: "/admin/master-configuration/document-type",
                      key: "document_type",
                    },
                    {
                      name: "Document Status",
                      path: "/admin/master-configuration/document-status",
                      key: "document_status",
                    },
                    {
                      name: "Rollback Time",
                      path: "/admin/master-configuration/roll-back-time",
                      key: "rollback_time",
                    },
                    {
                      name: "Country",
                      path: "/admin/master-configuration/country",
                      key: "country_name",
                    },
                    {
                      name: "Airlines",
                      path: "/admin/master-configuration/airlines",
                      key: "airlines_name",
                    },
                    {
                      name: "Passenger Flight",
                      path: "/admin/master-configuration/flight",
                      key: "passenger_flight",
                    },
                    {
                      name: "Cargo Flight",
                      path: "/admin/master-configuration/cargo-flight",
                      key: "cargo_flight",
                    },
                    {
                      name: "Traffic Rights",
                      path: "/admin/master-configuration/traffic-rights",
                      key: "traffic_rights",
                    },
                  ]?.filter((module: any) =>
                    permissionList?.includes(module.key)
                  ),
                }}
              />
            )}
            {permissionList?.includes("agreement_processing") && (
              <ListItem
                dataSource={{
                  name: "Agreement Processing",
                  path: "/admin/agreement-processing",
                  icon: <Icons.agreement className="text-white" />,
                  color: "#7367F0",
                }}
              />
            )} */}
            

            {/* <SubListItem
              dataSource={{
                name: "Setting",
                icon: <Icons.setting className="text-white" />,
                color: "#7367F0",
                path: "/admin/setting",
                child: [
                  {
                    name: "Menus",
                    path: "/admin/setting/menus",
                    key: "",
                  },
                  {
                    name: "User Manuals",
                    path: "/admin/setting/user-manuals",
                    key: "",
                  },
                  {
                    name: "Video Tutorials",
                    path: "/admin/setting/video-tutorials",
                    key: "",
                  },
                ]
              }}
            /> */}
          </Menu>
        </Sidebars>
      </div>
    </>
  );
};

export default SideBar;
