def build_trie(*words):
    trie = dict()

    print(words)
    # iterates each one of the words in the tuple
    for word in words:
        current_dict = {}
        for char in word:
            current_dict = current_dict.setdefault(char, {})
        current_dict[word] = None
    print(trie)

build_trie("trie")


