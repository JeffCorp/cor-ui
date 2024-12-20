import React from "react";
import { CoronationWhite } from "../Logo/Coronation";
import {Button} from "../Button";
import { Colors } from "../Colors";
import "./NavigationBar.css";
import { Typography } from "../Fonts";
import { Icon } from "../Icons";

interface ActionProps {
  name: string;
  href?: string;
  onClick?: (e: any) => void;
}

interface NavigationBarProps {
  links: ActionProps[];
  otherActionButtons: ActionProps[];
  isMobile?: boolean;
}

const NavigationBar = ({
  links,
  otherActionButtons,
  isMobile,
}: NavigationBarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   if (isMobile) {
//     return (
//       <div className="nav-container" style={{ justifyContent: "space-between" }}>
//         <CoronationWhite style={{ width: "182px", height: "20px" }} />
//         <div>
//           <Button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             background={Colors.primary.brand.purple200}
//             suffixIcon={
//               <Icon
//                 icon="list"
//                 variant="outline"
//                 color={Colors.primary.base.white}
//               />
//             }
//           />
//           {isMenuOpen && (
//             <div
//               style={{
//                 background: Colors.primary.base.white,
//                 borderRadius: "8px",
//                 position: "absolute",
//                 border: `1px solid ${Colors.primary.gray.neutral200}`,
//                 width: "100vw",
//                 left: 0,
//                 marginTop: '20px'
//               }}
//             >
//               {links.map((item, i) => (
//                 <div
//                   className="clickable selector-item"
//                   key={i}
//                   style={{ padding: "10px", width: "200px" }}
//                 >
//                   <a className="link" href={item.href}>
//                     <Typography>{item.name}</Typography>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="nav-container">
      <CoronationWhite style={{ width: "182px", height: "20px", flex: 1 }} />
      <nav style={{ flex: 4 }}>
        {links?.map((link, i) => (
          <a className="link" href={link.href} key={i}>
            <Typography>{link.name}</Typography>
          </a>
        ))}
      </nav>
      <div style={{ flex: 1 }}>
        {otherActionButtons?.map((button, i) => (
          <Button
            onClick={button.onClick}
            background={Colors.primary.brand.purple200}
            label={button.name}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
