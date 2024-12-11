def build_trie(*words):
    trie_dict = {}

    # Iterate through each word in the tuple
    for word in words:
        current_dict = trie_dict  # Start from the root of the trie
        previous_word = ''
        for char in word:
            current_word = previous_word + char
            previous_word = current_word
            # If the current_word is not in the dictionary, add it
            if current_word not in current_dict:
                current_dict[current_word] = {}
            # Move to the nested dictionary for the current_word
            current_dict = current_dict[current_word]
        # Mark the end of the word
        current_dict[word] = None  # Use the full word as the marker for the end

    print(trie_dict)

build_trie("trie")
