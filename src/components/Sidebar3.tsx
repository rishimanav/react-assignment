// import React, { ChangeEvent, Component } from "react";
// import "./Sidebar.css";
// import SidebarItem5 from "./SidebarItem5";
// import items from "../sidebar.json";

// let raw_data=[
//   {
//     "current": "Home",
//     "children": [
//       {
//         "current": "module-1",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-2",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-3",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-4",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-5",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       }
//     ]
//   },
  
//   {
//     "current": "Settings",
//     "children": [
//       {
//         "current": "module-6",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-7",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-8",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-9",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       },
//       {
//         "current": "module-10",
//         "children": [
//           {
//             "current": "submodule-1",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-2",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-3",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-4",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           },
//           {
//             "current": "submodule-5",
//             "children": [
//               {
//                 "current": "formgroup-1",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-2",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },
              
//               {
//                 "current": "formgroup-3",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-4",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               },

//               {
//                 "current": "formgroup-5",
//                 "children": [{"current": "form-1"},{"current": "form-2"},
//                             {"current": "form-3"},{"current": "form-4"},{"current": "form-5"}]
//               }
//             ]
//           }

//         ]
//       }
//     ]
//   },
//   {
//     "current":"TestModule"
//   }
// ]

// interface SidebarState {
//   originalData:any
//   stateItems: any;
//   search: string;
// }

// export default class Sidebar3 extends Component<{}, SidebarState> {
//   jsonData = items;
//   state = {
//     originalData:[],
//     stateItems: items,
//     search: "",
//   };

//   componentDidMount(): void {
//     this.setState({originalData:raw_data})
//   }

//   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<SidebarState>, snapshot?: any): void {
//     // console.log("previous state",prevState)
//   }

//   handleSearch(event: ChangeEvent<HTMLInputElement>) {
//     // this.state.search = ;

//     // console.log("ORGINAL ITEM>>>", raw_data);
//     // console.log("onchange target value>>>", event.target.value);
//     this.setState({search: event.target.value})
//     raw_data = items;
//     console.log("rAW DATA", raw_data)
//     const resultedData = this.searchTree(raw_data, event.target.value)

//      console.log("AFter filter REsulted data<<<<>>>>", resultedData);


//     // this.setState({stateItems:this.state.originalData,search:event.target.value});
//     // console.log(this.searchTree(this.state.stateItems, this.state.search))
//     this.setState({ stateItems: resultedData });
    
//     // refresh();
//   }
//   // document.location.reload()

//   searchTree = (toBefiltered: any, search: string):any => {
//     //if search is nil
//     // console.log("filter called", toBefiltered)
//     if (search == "") {
//       return this.state.originalData;
//     }

//     // return toBefiltered;

//     return toBefiltered.filter((item: any) => {
//       if (item.current.includes(search) && item.children === undefined) {
//         return true;
//       } else if (item.current.includes(search) && item.children !== undefined) {
//         item.children = this.searchTree(item.children, search);
//         return true;
//       } else if (item.children) {
//         item.children = this.searchTree(item.children, search);
//         return item.children.length > 0;
//       }
//       return false;
//     });
//   };

//   render() {
//     // console.log(this.state.stateItems)
//     console.log(items);
//     return (
//       <div className="sidebar bg-dark text-white mt-2 ms-1 rounded">
//         <div className="d-flex flex-column gap-2 mb-2">
//           <input
//             id="search_input"
//             className="rounded"
//             type="text"
//             placeholder="Search"
//             value={this.state.search}
//             onChange={(e) => this.handleSearch(e)}
//           />
//         </div>
//         {this.state.stateItems.map((value: any, index: number) => (
//           <SidebarItem5
//             key={index}
//             itemTitle={value.current}
//             itemChildren={value.children}
//           />
//         ))}
//       </div>
//     );
//   }
// }

import React, { Component } from 'react'

export default class Sidebar3 extends Component {
  render() {
    return (
      <div>Sidebar3</div>
    )
  }
}
