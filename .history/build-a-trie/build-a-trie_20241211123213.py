def build_trie(*words):
    trie = {}
    for word in words:
        for char in word:
