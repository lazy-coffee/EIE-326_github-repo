A = [0, 1]

for i in range(2 , 100):
  sum = A[i - 1] + A[i - 2]
  A.append(sum)

for i in range(100):
  print(A[i])