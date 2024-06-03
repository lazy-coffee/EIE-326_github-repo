#include <stdio.h>
#include <stdlib.h>
#include<math.h>

int main()
{
  int choice;
  printf("Choose one of the following operations: \n1. Addition \n2. Subtraction\n3. Multiplication\n4. Division\n");
  printf("\nYour choice: ");
  scanf("%d", &choice);
  if(choice == 1){
    float a,b;
    float answer;
    printf("Enter your value 1: ");
    scanf("%f", &a);
    printf("Enetr value 2: ");
    scanf("%f",&b);
    answer = a + b;
    printf("%f", answer);
    
  }else if(choice == 2){
    float a,b,c;
    printf("Enter a: ");
    scanf("%f", &a);
    printf("Enter b: ");
    scanf("%f", &b);
    printf("Enter c: ");
    scanf("%f", &c);

    if(b*b<4*a*c){
      float d = sqrt(4*a*c - b*b);
      float rnum = -b/ ((2)*(a));
      float inum = (d/(2*a))*(-1);
      printf("The roots are %f + %fi and %f- %fi", rnum, inum,rnum, inum);
      


    }
  }



}