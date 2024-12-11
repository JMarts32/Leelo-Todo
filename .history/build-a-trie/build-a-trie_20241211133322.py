def build_trie(*words):
    trie = dict()

    # iterates each one of the words in the tuple
    for word in words:
        print(word)
        current_dict = {}
        for char in word:
            current_dict = current_dict.setdefault(char, {})
        current_dict[word] = None
    print(trie)

build_trie("trie")


