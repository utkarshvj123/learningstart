import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [
        {
          text: "Author",
          link: "https://github.com/Lakston",
          icon: "fa-pencil-square-o"
        },
        {
          text: "Github page",
          link: "https://github.com/Lakston",
          icon: "fa-github"
        },
        {
          text: "Twitter",
          link: "https://twitter.com/Fab_is_coding",
          icon: "fa-twitter"
        }
      ]
    };
  }
  render() {
    let links = this.state.links.map((link, i) => (
      <li ref={i + 1}>
        <i aria-hidden="true" className={`fa ${link.icon}`}></i>
        <a href={link.link} target="_blank">
          {link.text}
        </a>
      </li>
    ));

    return (
      <div className={this.props.menuStatus} id="menu">
        <ul>{links}</ul>
      </div>
    );
  }
}

export default Navbar;
// import React, { Component } from "react";
// import "./index.css";

// import styled from "styled-components";

// const StyledMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #effffa;
//   transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: #0d0c1d;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     // @media (max-width: 576px) {
//     //   font-size: 1.5rem;
//     //   text-align: center;
//     // }
//     @media (max-width: 576px) {
//       width: 100%;
//     }
//     @media (max-width: 700px) {
//       font-size: 55%;
//     }
//     @media (max-width: 1300px) {
//       font-size: 62.5%;
//     }
//     @media (max-width: 1440px) {
//       font-size: 70%;
//     }
//     @media (max-width: 1735px) {
//       font-size: 75%;
//     }
//     @media (max-width: 1920px) {
//       font-size: 90%;
//     }
//     &:hover {
//       color: #343078;
//     }
//   }
// `;

// const Menu = props => {
//   const { open, ...restProps } = props;
//   return <StyledMenu open={open} {...restProps}></StyledMenu>;
// };

// const StyledBurger = styled.button`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 100;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => (open ? "black" : "black")};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? "0" : "1")};
//       transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
//     }
//   }
// `;

// const Burger = ({ open, setOpen, props }) => {
//   console.log("Comming to onclick outside", open);
//   console.log(props, "..props printing on burger");

//   return (
//     <StyledBurger open={open} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   );
// };

// const Parent = props => {
//   const [open, setOpen] = React.useState(false);

//   // const node = React.useRef();
//   function useOnClickOutside() {
//     if (open) {
//       setOpen(false);
//     }
//   }

//   function onClickOnNavigation() {
//     setOpen(true);
//     console.log("getting");
//   }
//   return (
//     <div
//       onClick={useOnClickOutside}
//       className="hello"
//       style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}
//     >
//       <Burger open={open} setOpen={setOpen} />
//       <Menu open={open} setOpen={setOpen} onClick={onClickOnNavigation}>
//         {props.children}
//       </Menu>
//     </div>
//   );
// };

// export default Parent;
