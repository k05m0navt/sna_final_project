interface Props {
    text: string;
}

const Footer = (props: Props) => {
    return (
        <footer className="align-bottom">
            <p>{props.text}</p>
        </footer>
    );
};

export default Footer;
