import type { ReactNode } from "react";

interface CustomButtonInterface {
    children: ReactNode,
    customStyles?: string
}

const CustomButton = ({children, customStyles}: CustomButtonInterface) => {
    return(
        <button className={`rounded-sm bg-red-700 color-white font-bold px-2 py-3 ${customStyles}`}>{children}</button>
    );
}

export default CustomButton;