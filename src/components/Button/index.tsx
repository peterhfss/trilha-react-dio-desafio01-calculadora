interface IButton{
    id?: string;
    label: string;
    isRed: boolean;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({id , label, isRed, handleClick}:IButton) => {
    return(
        <button id={id} className={`${isRed == true ? 'text-red-400': 'text-zinc-300'} p-5 hover:bg-gray-600/15 text-lg font-sans`} onClick={handleClick}>
            {label}
        </button>
    );
}