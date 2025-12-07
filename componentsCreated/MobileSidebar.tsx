//@ts-nocheck
import { Link } from "react-router";
import NavItems from "./NavItems";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import NavBar from "~/routes/root/NavBar";

const MobileSidebar = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  let sidebar: SidebarComponent;
  const toggleSidebar = () => {
    sidebar.hide();
  };
  return (
    <div className="mobile-sidebar wrapper">
      {/* Fixed mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center px-4 py-3 border-b border-light-100">
        <Link to="/" className="logo flex items-center gap-2">
          <img
            src="/assets/images/Visit-kembata-logo.jpg"
            alt="Visit Kembata Logo"
            className="size-[40px]"
          />
          <h1 className="text-base md:text-2xl font-bold text-dark-100">
            Visit Kembata
          </h1>
        </Link>

        <button onClick={() => sidebar.toggle()}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      {/* Add spacing for fixed header */}
      <div className="pt-16"></div>

      {/* Sidebar component */}
      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        showBackdrop={true}
        closeOnDocumentClick={true}
        created={toggleSidebar}
        type="over"
      >
        {isAdmin ? (
          <NavItems handleClick={toggleSidebar} />
        ) : (
          <NavBar handleClick={toggleSidebar} />
        )}
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;

// //@ts-nocheck
// import { Link } from "react-router";
// import NavItems from "./NavItems";
// import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
// // import NavBar from "~/routes/root/NavBar";

// const MobileSidebar = () => {
//   let sidebar: SidebarComponent;
//   const toggleSidebar = () => {
//     sidebar.hide();
//   };
//   return (
//     <div className="mobile-sidebar wrapper">
//       <header>
//         <Link to="/" className="logo">
//           <img
//             src="/assets/images/Visit-kembata-logo.jpg"
//             alt="Visit Kembata Logo"
//             className="size-[40px]"
//           />
//           <h1>Visit Kembata</h1>
//         </Link>

//         <button onClick={() => sidebar.toggle()}>
//           <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
//         </button>
//       </header>
//       <SidebarComponent
//         width={270}
//         ref={(Sidebar) => (sidebar = Sidebar)}
//         showBackdrop={true}
//         closeOnDocumentClick={true}
//         created={toggleSidebar}
//         type="over"
//       >
//         <NavItems handleClick={toggleSidebar} />
//         {/* <NavBar handleClick={toggleSidebar}/> */}
//       </SidebarComponent>
//     </div>
//   );
// };

// export default MobileSidebar;
