interface Props {
    text: string;
}

const Header = (props: Props) => {
    return (
        <header className="">
            <p className="text-4xl">{props.text}</p>
        </header>
    );
};

export default Header;
