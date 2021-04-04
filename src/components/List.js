import cross from '../images/icon-cross.svg'

const List = () => {
    const items = [
                    {
                        label: 'Complete online Javascript course',
                        isChecked: false,
                        isCompleted: false
                    },
                    {
                        label: 'Jog around the park 3x',
                        isChecked: false,
                        isCompleted: false
                    },
                    {
                        label: '10 minutes meditation',
                        isChecked: false,
                        isCompleted: false
                    },
                    {
                        label: 'Read for 1 hour',
                        isChecked: false,
                        isCompleted: false
                    },
                    {
                        label: 'Pick up groceries',
                        isChecked: false,
                        isCompleted: false
                    },
                    {
                        label: 'Complete Todo App on Frontend Mentor',
                        isChecked: false,
                        isCompleted: false
                    }
                ]

    function Item({label}) {
        return (
            <li className="list-item w-full relative font-josefin w-full bg-light-vlg dark:bg-dark-vddb pr-6 text-left flex item-center">
                
                <label className="text-base flex-auto py-4 pl-16 cursor-pointer">
                    <span className="label text-dark-lgb text-lg">{label}</span>
                    <input type="checkbox" onChange={handleCheck}/>
                    <span className="checkmark"></span>
                </label>

                <RemoveBtn />
            </li>
        )
    }

    function RemoveBtn() {
        return (
            <button className="button-close flex-shrink">
                <img src={cross} />
            </button>
        )
    }

    function handleCheck(evt) {
        if( document.querySelector('html').classList.contains('dark') ) {
            const listItem = evt.target.parentNode

            if( evt.target.checked ) {
                listItem.querySelector('.label').classList.add('line-through', 'text-dark-vdgb')
                listItem.querySelector('.label').classList.remove('text-dark-lgb')
                listItem.parentNode.querySelector('button').classList.add('hidden')
            } else {
                listItem.querySelector('.label').classList.remove('line-through', 'text-dark-vdgb')
                listItem.querySelector('.label').classList.add('text-dark-lgb')
                listItem.parentNode.querySelector('button').classList.remove('hidden')
            }
        }
    }

    return (
        <ul>
            {Object.keys(items).map(fieldKey => {
                return <Item key={fieldKey} label={items[fieldKey].label} />
            })}
        </ul>
    )
}

export default List;