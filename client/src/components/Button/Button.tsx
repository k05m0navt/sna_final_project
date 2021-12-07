interface Props {
    onClick: () => void;
    text: string;
}

const Button = (props: Props) => {
    return (
        <button
            className="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default Button;
