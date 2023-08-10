import type { FC, SVGProps } from "react";

const PlusIcon: FC<SVGProps<SVGSVGElement>> = ({ ...other }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
         viewBox="0 0 80.568 80.614"
         {...other}
      >
         <path
            d="M12.451-35.254c0 2.393 2.002 4.346 4.346 4.346h31.592V.684c0 2.343 1.953 4.345 4.345 4.345 2.393 0 4.395-2.002 4.395-4.345v-31.592h31.543c2.344 0 4.346-1.953 4.346-4.346s-2.002-4.394-4.346-4.394H57.129v-31.543c0-2.344-2.002-4.346-4.395-4.346-2.392 0-4.345 2.002-4.345 4.346v31.543H16.797c-2.344 0-4.346 2.002-4.346 4.394z"
            transform="translate(-12.451 75.537)"
         ></path>
      </svg>
   );
}

export default PlusIcon;