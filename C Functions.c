#include <stdio.h>
#include <stdlib.h>

//Function creation
int addInteger(int a, int b)
{
  return a + b;
}

float addDecimal(float a, float b)
{
  return a + b;
}

int sumTerms(int n)
{
  int sum = 0;
  int a;

  for(int i = 0; i < n; i++)
  {
    scanf("Enter a number: %d", a);
    sum += a;
  }

  return sum;
}

//Main function
int main()
{
  int Intresult = addInteger(2, 3); //Function declaration
  printf("%d\n", Intresult);

  float Decimalresult = addDecimal(2.34, 3.721);
  printf("%f", Decimalresult);

  //Sum of terms classwork

  int sumTerms(5);

  return 0;
}