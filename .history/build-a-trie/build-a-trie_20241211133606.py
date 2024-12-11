def build_trie(*words):
    trie_dict = {}

    # iterates each one of the words in the tuple
    for word in words:
        current_dict = {}
        previuos_char = ''
        for char in word:
            current_dict[char] = {}
            print(current_dict)
        current_dict[word] = None
    print(trie_dict)

build_trie("trie")


