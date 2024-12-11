def build_trie(*words):
    trie_dict = {}

    # iterates each one of the words in the tuple
    for word in words:
        current_dict = {}
        previuos_word = ''
        for char in word:
            current_word = previuos_word + char
            previuos_word = current_word
            current_dict[current_word] = {}
            current_dict = current_dict[current_word]
        current_dict[word] = None
    # print(trie_dict)

build_trie("trie")


