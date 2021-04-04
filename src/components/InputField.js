
const InputField = ({...rest}) => {
    return (
        <div {...rest}>
            <input type="text" placeholder="Create a new todo..." class="font-josefin w-full text-dark-dgb placeholder-dark-dgb font-bold bg-light-vlg dark:bg-dark-vddb py-4 pl-16" />
        </div>
    )
}

export default InputField;