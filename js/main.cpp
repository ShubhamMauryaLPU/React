#include <iostream>
using namespace std;
int main()
{
    int arr[] = {10,13,22,26,34,41};
    int st = 0;
    int en = 5;
    int value = 22;
    while (st != en)
    {
        int mid = (st + en) / 2;
        if (arr[mid] == value)
        {
            cout << mid;
            break;
        }
        else if (arr[mid] > value)
        {
            en = mid - 1;
        }
        else
        {
            st = mid + 1;
        }
    }
 return 0;
}