def build_trie(*words):
    trie_dict = {}

    # Iterate through each word in the tuple
    for word in words:
        current_dict = trie_dict
        previous_word = ''
        for char in word:
            current_word = previous_word + char
            previous_word = current_word
            if current_word not in current_dict:
                current_dict[current_word] = {}
            current_dict = current_dict[current_word]
        current_dict[word] = None

    print(trie_dict)

build_trie("trie")
