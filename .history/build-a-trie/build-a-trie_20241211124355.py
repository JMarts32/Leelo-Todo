def build_trie(*words):
    trie = {}

    # iterates each one of the words in the tuple
    for word in words:
        current_tree = {}
        for char in word:
            current_tree[char] = {}
        current_tree[word] = None



