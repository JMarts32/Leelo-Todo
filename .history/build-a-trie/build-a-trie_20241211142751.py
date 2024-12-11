def build_trie(*words):
    trie_dict = {}

    for word in words:
        current_dict = trie_dict
        prev_word = ''
        if word == '':
            return {}
        for char in word:
            current_word = prev_word + char
            prev_word = current_word
            if current_word not in current_dict:
                current_dict[current_word] = {}
                print(current_word)
                print(word)
                print(current_word == word)
            current_dict = current_dict[current_word]
    print(trie_dict)

print(build_trie("A","to", "tea", "ted", "ten", "i", "in", "inn"))


