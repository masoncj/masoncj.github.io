import { useCombobox, useMultipleSelection } from "downshift";
import { useMemo, useState } from "react";
import { Tag, Tags } from "../interfaces";
import TagBubble from "./tagBubble";

import * as _ from "lodash";

import styles from './searchBox.module.css'

type Props = {
    tags: Tags,
    activeTags: Tag[],
    setActiveTags: (tags: Tag[]) => void
}

export function SearchBox({tags, activeTags, setActiveTags}:Props) {
    const allTags = useMemo(() => _.values(tags), [tags])
    const [inputValue, setInputValue] = useState('')

    const visibleTags = useMemo(() => allTags.filter((tag) =>
        !inputValue || tag.name.toLowerCase().indexOf(inputValue.toLowerCase()) == 0
    ), [allTags, inputValue])

    const {
        getSelectedItemProps,
        getDropdownProps,
        addSelectedItem,
        removeSelectedItem,
    } = useMultipleSelection({
        selectedItems: activeTags,
        onStateChange({selectedItems: newSelectedItems, type}) {
            switch (type) {
                case useMultipleSelection.stateChangeTypes
                    .SelectedItemKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                    setActiveTags(newSelectedItems || [])
                    break
                default:
                    break
            }
        },
    });

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
    } = useCombobox({
        items: visibleTags,
        itemToString: function(tag: Tag | null) {
            return tag ? tag.name : ''
        },
        defaultHighlightedIndex: 0, // after selection, highlight the first item.
        selectedItem: null,
        stateReducer(state, actionAndChanges) {
            const {changes, type} = actionAndChanges

            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                case useCombobox.stateChangeTypes.InputBlur:
                    return {
                        ...changes,
                        ...(changes.selectedItem && {isOpen: false, highlightedIndex: 0}),
                    }
                default:
                    return changes
            }
        },
        onStateChange({
                          inputValue: newInputValue,
                          type,
                          selectedItem: newSelectedItem,
                      }) {
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if(!!newSelectedItem) setActiveTags([...activeTags, newSelectedItem])
                    setInputValue('')

                    break

                case useCombobox.stateChangeTypes.InputChange:
                    setInputValue(newInputValue || '')

                    break
                default:
                    break
            }
        },
    })

    return (
        <div className={styles.searchBox}>
            <img className={styles.searchIcon} src="images/search-icon.svg"/>
            <div className={styles.tagList}>
                <ul className='tag-list'>
                    { activeTags.map((tag) => {
                        return (
                            <TagBubble key={tag.name} tag={tag} showClose={true} onClose={removeSelectedItem} onClick={removeSelectedItem}/>
                        )
                    } ) }
                </ul>
            </div>
            <input
                className={styles.searchInput}

                {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
            />
            {isOpen &&
                <div className={styles.searchMenu}>
                    <div className={styles.searchMenuContents}>
                        <ul className="tag-list-raw"
                            {...getMenuProps()}
                            >
                            {
                                visibleTags.map((tag, index) => (
                                    <TagBubble
                                        key={tag.name}
                                        tag={tag}
                                        tags={tags}
                                        onClick={(tag) => setActiveTags([...activeTags, tag])}
                                        highlighted={index === highlightedIndex}
                                        {...getItemProps({item: tag, index})}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}