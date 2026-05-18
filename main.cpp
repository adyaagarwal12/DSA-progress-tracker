#include "Tracker.h"

int main()
{
    Tracker t;
    t.loadFromFile();

    int choice;

    while(true)
    {
        cout<<"\n====== LeetCode Tracker ======\n";

        cout<<"1. Add Problem\n";
        cout<<"2. View Problems\n";
        cout<<"3. Search Problem\n";
        cout<<"4. Exit\n";

        cout<<"Enter choice: ";
        cin>>choice;

        if(choice==1)
        {
            t.addProblem();
        }

        else if(choice==2)
        {
            t.viewProblems();
        }

        else if(choice==3)
        {
            t.searchProblem();
        }

        else if(choice==4)
        {
            break;
        }

        else
        {
            cout<<"Invalid Choice\n";
        }
    }

    return 0;
}