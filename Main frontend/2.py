def candy(ratings):
    n = len(ratings)
    candies = [1] * n  # Each child gets at least one candy
    
    # Left to right pass
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1
    
    # Right to left pass
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)
    
    return sum(candies)

# Example 1
ratings1 = [1, 0, 2]
print(candy(ratings1))  # Output: 5

# Example 2
ratings2 = [1, 2, 2]
print(candy(ratings2))  # Output: 4
