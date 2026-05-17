#include "Tracker.h"

void Tracker::addProblem()
{
    Problem p;

    cout<<"Enter title: ";
    cin.ignore();
    getline(cin,p.title);

    cout<<"Enter topic: ";
    getline(cin,p.topic);

    cout<<"Enter difficulty: ";
    getline(cin,p.difficulty);

    cout<<"Solved? (1/0): ";
    cin>>p.solved;

    problems.push_back(p);

    cout<<"Problem Added Successfully\n";
}
void Tracker::viewProblems()
{
    for(auto p:problems)
    {
        cout<<p.title<<" | "
            <<p.topic<<" | "
            <<p.difficulty<<" | ";

        if(p.solved)
            cout<<"Solved\n";

        else
            cout<<"Pending\n";
    }
}