def build_trie(*words):
    trie = {}

    # iterates each one of the words in the tuple
    for word in words:
        current_dict = {}
        for char in word:


