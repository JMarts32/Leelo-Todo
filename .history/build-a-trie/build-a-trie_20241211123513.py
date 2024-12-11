def build_trie(*words):
    trie = {}

    # iterates each one of the words in the tuple
    for word in words:
        # once we have the `word`, we need to iterate backwards to build the leafs
        word_length = len(word)
        while word != '':


